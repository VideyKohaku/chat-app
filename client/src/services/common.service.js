import axios from "axios";

export const postRequest = async (url, body) => {
  console.log("url: ", url);
  try {
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch ({ response }) {
    // Handle errors
    throw response;
  }
}

export const getRequest = async (url) => {
  try{
    const response = await axios.get(url)

    return response.data;
  } catch({response}){
    return response;
  }
}