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

const getCookieAttributes = () => {
  const baseAttributes = "path=/; SameSite=Lax";

  if (window.location.protocol === "https:") {
    return `${baseAttributes}; Secure`;
  }

  return baseAttributes;
};

const normalizeToken = (token?: string | null) => {
  if (!token) {
    return undefined;
  }

  const trimmedToken = token.trim();

  if (
    !trimmedToken ||
    trimmedToken === "undefined" ||
    trimmedToken === "null"
  ) {
    return undefined;
  }

  return trimmedToken;
};

const decodeJwtPayload = (token: string): { exp?: number } | null => {
  const tokenParts = token.split(".");

  if (tokenParts.length !== 3) {
    return null;
  }

  try {
    const base64 = tokenParts[1].replace(/-/g, "+").replace(/_/g, "/");
    const paddedBase64 = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    return JSON.parse(atob(paddedBase64));
  } catch {
    return null;
  }
};

const isExpiredJwt = (token: string) => {
  const payload = decodeJwtPayload(token);

  if (!payload || typeof payload.exp !== "number") {
    return false;
  }

  return Date.now() >= payload.exp * 1000;
};

const setToken = (token: string) => {
  localStorage.setItem("token", token);
  document.cookie = `access_token=${token}; ${getCookieAttributes()};`;
};

const getToken = () => {
  const accessToken = document.cookie.split(";").find((cookie) => {
    return cookie.trim().startsWith("access_token=");
  });

  const validateToken = (candidate?: string) => {
    const normalizedToken = normalizeToken(candidate);

    if (!normalizedToken) {
      return undefined;
    }

    if (isExpiredJwt(normalizedToken)) {
      removeToken();
      return undefined;
    }

    return normalizedToken;
  };

  if (accessToken) {
    const tokenFromCookie = accessToken
      .trim()
      .slice("access_token=".length);
    return validateToken(tokenFromCookie);
  }

  return validateToken(localStorage.getItem("token") || undefined);
};

const setUser = (user: UserData["user"]) => {
  const value = encryptValue(JSON.stringify(user));
  document.cookie = `logged_user=${value}; ${getCookieAttributes()};`;
};
const setFullProfile = (user: UserData) => {
  const value = encryptValue(JSON.stringify(user));
  document.cookie = `user_profile=${value}; ${getCookieAttributes()};`;
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
  document.cookie =
    "logged_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "user_profile=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
