import { createContext, useState, useEffect, useCallback } from "react";
import { getUserChatsAPI, createNewChatRoomAPI } from "../services/chat.service";
import { getUsersAPI } from "../services/auth.service";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);
    const [potentialChats, setPotentialChats] = useState([])

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

            // console.log("usersData", usersData)
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

    }, [userChats])


    const createChatRoom = useCallback(async (firstId, secondId) => {
        try {
            console.log(`firstId:  ${firstId}, secondId: ${secondId}`)
            const body = JSON.stringify({
                firstId,
                secondId
        })
            const newChatRoom = await createNewChatRoomAPI("/", body)

            setUserChats([...userChats, newChatRoom])
        } catch (error) {
            console.log(error)
            setUserChatsError(error.data)
        }

    })

    return <ChatContext.Provider
        value={{
            userChats,
            isUserChatsLoading,
            userChatsError,
            potentialChats,
            createChatRoom
        }}
    >
        {children}
    </ChatContext.Provider>
}