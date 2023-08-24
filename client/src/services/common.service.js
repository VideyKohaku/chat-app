import axios from "axios";

export const postRequest = async (url, body) => {
  console.log("url: ", url);
  try {
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log(response.data);
    return response.data;
  } catch ({ response }) {
    // Handle errors
    // console.log("error happened: ", response);
    throw response;
  }
}

export const getRequest = async (url) => {
  console.log(url)
  try{
    const response = await axios.get(url)

    console.log("get request", response)
    return response.data;
  } catch({response}){
    return response;
  }
}