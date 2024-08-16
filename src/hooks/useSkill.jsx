import axios from "axios";

export const getSkills = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/skill");
    const data = response.data
    return data;

  } catch (error) {
    console.log(error);
  }
};

