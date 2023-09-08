import { createContext, useState, useEffect, useCallback } from "react";
import { getUserChatsAPI, createNewChatRoomAPI, getMessagesAPI, createMessageAPI } from "../services/chat.service";
import { getUsersAPI } from "../services/auth.service";
import { io } from "socket.io-client"

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState([]);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);
    const [potentialChats, setPotentialChats] = useState([]);
    const [currentChatRoom, setCurrentChatRoom] = useState(null);
    const [isMessageLoading, setIsMessageLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [toSentMessage, setToSentMessage] = useState("");
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);


    // handle send message on change
    const updateSendMessage = useCallback((content) => {
        setNewMessage(content)
    }, [])

    // intial the socket
    useEffect(() => {
        const newSocket = io("http://localhost:3000");
        setSocket(newSocket);

        return () => {
            newSocket.disconnect()
        }
    }, [user])


    // get online users
    useEffect(() => {
        if (socket == null) return;

        socket.emit("addNewUser", user?.id);

        socket.on("getUserOnline", (res) => {
            setOnlineUsers(res)
        })

        return () => {
            socket.off("getUserOnline")
        }
    }, [socket, user?.id])


    // send message real-time
    useEffect(() => {
        if (socket === null) return;

        const recipientId = currentChatRoom?.members?.find((memberId) => memberId != user?.id)

        socket.emit("sendMessage", { ...toSentMessage, recipientId })
    }, [toSentMessage, currentChatRoom?.members, user?.id, socket])


    // receive message real-time
    useEffect(() => {
        if (socket == null) return;

        socket.on("getMessage", (messageRes) => {
            if (currentChatRoom._id !== messageRes.chatRoomId) return;

            setMessages((prev) => [...prev, messageRes])
        })

        // clean up function
        return () => {
            socket.off("getMessage")
        }
    }, [socket, currentChatRoom])



    const sendMessage = useCallback((senderId) => {
        const createNewMessage = async () => {
            try {
                if (newMessage === "") throw "You have not enter anything"
                const body = {
                    senderId: senderId,
                    chatRoomId: currentChatRoom._id,
                    content: newMessage
                }
                const newMessageData = await createMessageAPI("/", body)
                setToSentMessage(newMessageData)
                setMessages((prev) => [...prev, newMessageData])

                return newMessageData
            } catch (error) {
                console.log("error in send message: ", error)
            }
        }


        createNewMessage()
    }, [newMessage, currentChatRoom, socket])


    // handle logic when get UserChat
    useEffect(() => {
        const getUserChats = async () => {
            if (user?.id) {
                setIsUserChatsLoading(true)
                setUserChatsError(null)
                const chatData = await getUserChatsAPI(`/${user?.id}`)

                setIsUserChatsLoading(false)

                if (chatData.error) {
                    console.log(chatData.error)
                    return setUserChatsError(chatData.error)
                }

                setUserChats(chatData)
            }
        }

        getUserChats()
    }, [user])


    // handle logic of potential new chats list
    useEffect(() => {
        const getPotentialChats = async () => {
            const usersData = await getUsersAPI("/");
            if (usersData.error) {
                return console.log(usersData.error);
            }

            const potentialUsers = usersData.filter((potentialUser) => {
                let isChatCreated = false;

                if (user?.id == potentialUser._id) return false;

                if (userChats) {
                    isChatCreated = userChats.some((chatRoom) => {
                        return chatRoom.members[0] == potentialUser._id || chatRoom.members[1] == potentialUser._id;
                    })
                }

                return !isChatCreated
            })

            setPotentialChats(potentialUsers)
        }

        getPotentialChats()

    }, [userChats, user])


    // fetch messages current rooms
    useEffect(() => {
        const getMessages = async () => {
            setIsMessageLoading(true);
            const messagesData = await getMessagesAPI(`/${currentChatRoom?._id}`)
            setIsMessageLoading(false);
            if (messagesData.error) {
                console.log(messagesData.error)
            }
            setMessages(messagesData)
        }

        getMessages()
    }, [currentChatRoom])


    useEffect(() => {
        if (userChats.length > 0 && currentChatRoom === null) {
            setCurrentChatRoom(userChats[0])
        }
    }, [userChats])


    // handle create new Chat rooms
    const createChatRoom = useCallback(async (firstId, secondId) => {
        try {
            const body = JSON.stringify({
                firstId,
                secondId
            })
            const newChatRoom = await createNewChatRoomAPI("/", body)

            setUserChats(() => {
                if (userChats.length === 0) {
                    return [newChatRoom]
                } else {
                    return [...userChats, newChatRoom]
                }
            })
        } catch (error) {
            console.log(error)
            setUserChatsError(error.data)
        }
    }, [])


    // update current chat room
    const updateCurrentChat = useCallback((chatRoom) => {
        setCurrentChatRoom(chatRoom)
    }, [])


    return <ChatContext.Provider
        value={{
            userChats,
            isUserChatsLoading,
            userChatsError,
            potentialChats,
            createChatRoom,
            currentChatRoom,
            updateCurrentChat,
            messages,
            isMessageLoading,
            updateSendMessage,
            sendMessage,
            newMessage,
            onlineUsers,
        }}
    >
        {children}
    </ChatContext.Provider>
}