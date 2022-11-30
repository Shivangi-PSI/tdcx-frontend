import AxiosInstance from "../utils/axios-instance";

export const loginUser = async (data, callback) => {
  try {
    const response = await AxiosInstance({
      url: "login",
      method: "POST",
      data: data
    })
    localStorage.setItem("token", response.data.user.token);
    callback(response.data.user, response.data.msg);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

export const fetchUser = async (callback) => {
  try {
    const response = await AxiosInstance({
      url: "current-user",
      method: "GET"
    })
    callback(response.data.user);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};
