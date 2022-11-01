import { AUTH_RE_LOGIN } from "../common/urls";
import client from "@core/api/axios";
import {
  getLocalRefreshToken,
  removeLocalRefreshToken,
  setLocalRefreshToken,
} from "@core/helper/localStore";
import { isOK } from "@core/helper/validate_code";
import { AUTH_LOGIN, AUTH_LOGOUT } from "../common/urls";

export const signIn = async (email: string, password: string) => {
  const response = await client.post(AUTH_LOGIN, {
    email: email,
    password: password,
  });
  if (isOK(response.status)) {
    const { data, refreshToken, message } = response.data;
    // store refresh token
    setLocalRefreshToken(refreshToken);
    return { message, data };
  }
  // unknown error
  throw new Error("Unknown error");
};

export const signOut = async () => {
  const response = await client.get(AUTH_LOGOUT, {
    headers: { "x-token-refresh": getLocalRefreshToken() },
    withCredentials: true,
  });
  if (isOK(response.status)) {
    const { message } = response.data;
    removeLocalRefreshToken();
    return {
      code: response.status,
      message: message,
    };
  }
  // unknown error
  throw new Error("Unknown error");
};

export const authReLogin = async () => {
  const refreshToken = getLocalRefreshToken();
  if (refreshToken === "") {
    return Promise.reject({
      code: 401,
      message: "Login is expired",
    });
  }
  if (refreshToken === null) {
    return Promise.reject({
      code: 200,
      message: "",
    });
  }
  const { data } = await client.get(AUTH_RE_LOGIN, {
    headers: { "x-token-refresh": refreshToken },
  });
  if (data && isOK(data.code)) {
    return { code: data.code, message: "Login success", data: data.data };
  }
  // unknown error
  throw new Error("Unknown error");
};
