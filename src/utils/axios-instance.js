import axios from "axios"; 
import { ROOT_URL } from "./constant";
import { apiHeaders } from "./helper";

const AxiosInstance = axios.create({
  baseURL : ROOT_URL,
  headers: apiHeaders(),
  mode: 'cors'
});

export default AxiosInstance;