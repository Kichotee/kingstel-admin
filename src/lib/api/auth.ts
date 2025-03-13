/* eslint-disable no-param-reassign */

/* eslint-disable camelcase */

import { UserData } from "@/pages/authentication/types";
import cryptoJs from "crypto-js";

const encryptValue = (value: string) => {
  return cryptoJs.AES.encrypt(value, import.meta.env.VITE_SECRET_KEY, {
    mode: cryptoJs.mode.CBC,
  }).toString();
};
const decrypt = (encryptedValue: string) => {
  return cryptoJs.AES.decrypt(encryptedValue, import.meta.env.VITE_SECRET_KEY, {
    mode: cryptoJs.mode.CBC,
  }).toString(cryptoJs.enc.Utf8);
};

const setToken = (token: string) => {
  // Set the cookie with the expiration date
  document.cookie = `access_token=${token};  SameSite=None; Secure;`;
};

const getToken = () => {
  // return localStorage.getItem("token");
  const accessToken = document.cookie.split(";").find((cookie) => {
    return cookie.trim().startsWith("access_token=");
  });

  if (accessToken) {
    return accessToken.split("=")[1];
  }
};

const setUser = (user: UserData["user"]) => {
  const value = encryptValue(JSON.stringify(user));
  document.cookie = `logged_user=${value}; SameSite=None; Secure;`;
};
const setFullProfile = (user: UserData) => {
  const value = encryptValue(JSON.stringify(user));
  document.cookie = `user_profile=${value}; SameSite=None; Secure;`;
};

const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem("refreshToken", refreshToken);
};

const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

const removeDomainObj = () => {
  localStorage.removeItem("domain");
};

const removeToken = () => {
  localStorage.removeItem("token");
  document.cookie =
    "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  localStorage.removeItem("refreshToken");
  localStorage.clear();
  sessionStorage.clear();
};
const getUserObj = (): UserData["user"] => {
  const userCookie = document.cookie.split(";").find((cookie) => {
    return cookie.trim().startsWith("logged_user=");
  });

  if (userCookie) {
    const userValue = userCookie.split("=")[1];

    const decodedUser: UserData["user"] = JSON.parse(decrypt(userValue));
    return decodedUser;
  }
  return {} as UserData["user"];
};
const getFullProfile = (): UserData => {
  // const foundUser = localStorage.getItem("user");
  const userCookie = document.cookie.split(";").find((cookie) => {
    return cookie.trim().startsWith("user_profile=");
  });

  if (userCookie) {
    const userValue = userCookie.split("=")[1];
    const decodedUser: UserData = JSON.parse(decrypt(userValue));
    return decodedUser;
  }
  return {} as UserData;
};

const logOut = () => {
  removeToken();
  document.cookie =
    "logged_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "user_profile=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.pathname = "/login";
};

const Auth = {
  setToken,
  getToken,
  removeToken,
  setRefreshToken,
  getRefreshToken,
  removeDomainObj,
  encryptValue,
  decrypt,
  logOut,
  setUser,
  setFullProfile,
  getFullProfile,
  getUserObj,
};

export default Auth;
