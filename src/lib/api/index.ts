/* eslint-disable no-param-reassign */
// import Axios from "axios";
import axios from "axios";
import Auth from "./auth";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = Auth.getToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },

  (error: any) => {
    return Promise.reject(error);
  }
);
export default instance;
