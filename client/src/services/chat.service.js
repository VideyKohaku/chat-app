import { baseURL, CHAT_URL } from "./appConfig.service";
import { getRequest, postRequest } from "./common.service";

const chatPath = baseURL + CHAT_URL

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
        console.log("body", body)
        console.log("url in create new chat room:", url);
        const newChatRoom = await postRequest(url, body);
        return newChatRoom
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {
    getUserChatsAPI,
    createNewChatRoomAPI,
}