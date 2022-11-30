import AxiosInstance from "../utils/axios-instance";

export const getAllTasks = async (callback) => {
  try {
    const response = await AxiosInstance({
      url: "tasks",
      method: "GET",
    })
    callback(response.data.tasks);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

export const createTask = async (data, callback) => {
  try {
    const response = await AxiosInstance({
      url: "tasks",
      method: "POST",
      data: data
    })
    callback(response.data.task, response.data.msg);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

export const updateTask = async (data, id, callback) => {
  try {
    const response = await AxiosInstance({
      url: `tasks?id=${id}`,
      method: "PATCH",
      data: data
    })
    callback(response.data.task, response.data.msg);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

export const deleteTask = async (id, callback) => {
  try {
    const response = await AxiosInstance({
      url: `tasks?id=${id}`,
      method: "DELETE"
    })
    callback(response.data, response.data.msg);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

export const searchTask = async (name,callback) => {
  try {
    const response = await AxiosInstance({
      url: `search?name=${name}`,
      method: "GET",
    })
    callback(response.data.tasks);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

