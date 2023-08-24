import { baseURL, CHAT_URL } from "./appConfig.service";
import { getRequest } from "./common.service";

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

export {
    getUserChatsAPI
}