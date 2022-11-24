import axios from "axios";
import { ROOT_URL } from "../utils/constant";
import { apiHeaders } from "../utils/helper";

export const getAllTasks = async (callback) => {
  try {
    const response = await axios.get(`${ROOT_URL}/tasks`, {
      mode: "cors",
      headers: apiHeaders(),
    });
    callback(response.data.tasks);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

export const createTask = async (data, callback) => {
  try {
    const response = await axios.post(`${ROOT_URL}/tasks`, data, {
      mode: "cors",
      headers: apiHeaders(),
    });
    callback(response.data.task);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

export const updateTask = async (data, id, callback) => {
  try {
    const response = await axios.patch(`${ROOT_URL}/tasks?id=${id}`, data, {
      mode: "cors",
      headers: apiHeaders(),
    });
    callback(response.data.task);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

export const deleteTask = async (id, callback) => {
  try {
    const response = await axios.delete(`${ROOT_URL}/tasks?id=${id}`, {
      mode: "cors",
      headers: apiHeaders(),
    });
    callback(response.data);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

export const searchTask = async (name,callback) => {
  try {
    const response = await axios.get(`${ROOT_URL}/search?name=${name}`, {
      mode: "cors",
      headers: apiHeaders(),
    });
    callback(response.data.tasks);
  } catch (error) {
    const msg = error.response ? error.response.data.error : error.message;
    callback(null, msg);
  }
};

