import axios from "axios";

export const useHttp = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};

