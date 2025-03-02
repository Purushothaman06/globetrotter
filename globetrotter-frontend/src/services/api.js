import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchRandomDestination = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/random`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching random destination:", error.message);
      console.error("Error details:", error.response?.data);
    } else {
      console.error("Error fetching random destination:", error);
    }
    return null
  }
};
