import { createContext, useState, useEffect } from "react";
import { getUserChatsAPI } from "../services/chat.service";

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);

    // handle logic when get UserChat
    useEffect(() => {
        const getUserChats = async () => {
            if(user?.id){
                setIsUserChatsLoading(true)
                setUserChatsError(null)
                const chatData = await getUserChatsAPI(`/${user?.id}`)

                setIsUserChatsLoading(false)

                if(chatData.error){
                    console.log(chatData.error)
                    return setUserChatsError(chatData.error)
                    
                }

                setUserChats(chatData)
            }
        }

        getUserChats()
    },[ user ])

    return <ChatContext.Provider
        value={{
            userChats,
            isUserChatsLoading,
            userChatsError,
        }}
    >
        {children}
    </ChatContext.Provider>
}