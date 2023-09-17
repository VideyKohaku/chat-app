import { baseURL, CHAT_URL, MESSAGE_URL } from "./appConfig.service";
import { getRequest, postRequest } from "./common.service";

const chatPath = baseURL + CHAT_URL
const messagePath = baseURL + MESSAGE_URL

// these function only get endpoint, call the api and return the data

// http://localhost:5000/api/chats  {/6478b46142e204134286a082   or    /find/..... 
const getUserChatsAPI = async (endpoint = "/") => {
    try {

        const url = chatPath + endpoint
        const chatData = await getRequest(url);
        return chatData;
    } catch (error) {
        console.log(error);
        throw error
    }
}

const createNewChatRoomAPI = async (endpoint = "/", body) => {
    try {
        const url = chatPath + endpoint
        const newChatRoom = await postRequest(url, body);
        return newChatRoom
    } catch (error) {
        console.log(error);
        throw error;
    }
}


const getMessagesAPI = async (endpoint) => {
    try {
        const url = messagePath + endpoint
        const messagesData = await getRequest(url)
        return messagesData       
    } catch (error) {
        console.log("error in get messages:", error)
        throw error;
    }
}


const createMessageAPI = async (endpoint, body) => {
    try {
        const url = messagePath + endpoint
        const newMessageData = await postRequest(url, body)
        return newMessageData
    } catch (error) {
        console.log("error in create new message", error)
        throw error;
    }
}

export {
    getUserChatsAPI,
    createNewChatRoomAPI,
    getMessagesAPI,
    createMessageAPI
}