import { baseURL } from "./appConfig.service";
import axios from "axios";

const authURL = baseURL + "/users";

const register = async (endpoint, body) => {
  const url = authURL + endpoint;
  console.log("url: ", url);
  try {
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`,
        // Add Authorization header if required
      },
    });
    // console.log(response.data);
    return response.data;
  } catch ({response}) {
    // Handle errors
    console.log("error happened: ", response);
    throw response;
  }
};

export { register };