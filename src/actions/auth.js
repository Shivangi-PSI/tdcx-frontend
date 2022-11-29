import axios from "axios";
import { ROOT_URL } from "../utils/constant";
import { apiHeaders } from "../utils/helper";

export const loginUser = async (data, callback) => {
  try {
    const response = await axios.post(`${ROOT_URL}/login`, data, {
      mode: "cors",
    });
    localStorage.setItem("token", response.data.user.token);
    callback(response.data.user, response.data.msg);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

export const fetchUser = async (callback) => {
  try {
    const response = await axios.get(`${ROOT_URL}/current-user`, {
      mode: "cors",
      headers: apiHeaders(),
    });
    callback(response.data.user);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};
