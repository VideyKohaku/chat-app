import { baseURL, AUTH_URL, FIND_USER_URL } from "./appConfig.service";
import { postRequest, getRequest } from "./common.service";

const userPath = baseURL + AUTH_URL
const findUserPath = baseURL + FIND_USER_URL 

const register = async (endpoint, body) => {
  try {
    const url = userPath + endpoint
    console.log("auth url:", url)
    const userData = await postRequest(url, body);
    return userData;
  } catch (error) {
    console.log("Error in register: ", error);
    throw error;
  }
}

const login = async (endpoint, body) => {
  try {
    const url = userPath + endpoint
    const userData = await postRequest(url, body);
    return userData;
  } catch (error) {
    console.log("Error in login: ", error);
    throw error;
  }
}

const findUser = async (endpoint) => {
  try {
    const url = findUserPath + endpoint
    const userData = await getRequest(url);
    return userData;
  } catch (error) {
    console.log("Error in Find User: ", error);
    throw error;
  }
} 

const getUsersAPI = async (endpoint) => {
  try {
    const url = userPath + endpoint;
    const usersData = await getRequest(url);
    return usersData
  } catch (error) {
    console.log("Error in get all users:", error)
    throw error;
  }
}


export { register, login, findUser, getUsersAPI };