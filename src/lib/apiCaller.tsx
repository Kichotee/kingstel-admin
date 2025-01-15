import Axios, { InternalAxiosRequestConfig } from "axios";

const token = localStorage.getItem("token");
function authRequestInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  if (config.headers) {
    if (token) {
      // eslint-disable-next-line no-unused-expressions, no-param-reassign, @typescript-eslint/no-unused-expressions
      config.headers.authorization ? (config.headers.authorization = `${token}`) : "";
    }
    // eslint-disable-next-line no-param-reassign
    config.headers.Accept = "application/json";
    return config;
  }
  return config;
}

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(message);
  }
);
