import { setLocalRefreshToken } from "./../helper/localStore";
import { isAuthenticate, isPublicUrl } from "@core/helper/validate_code";
import { AUTH_RE_LOGIN } from "@routes/Auth/common/urls";
import axios from "axios";
import { getLocalRefreshToken } from "../helper/localStore";

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 3000, // 3s
  timeoutErrorMessage: "Timeout error",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
});
client.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (err) => Promise.reject(err)
);

client.interceptors.response.use(
  (response) => {
    try {
      const config = response.config;
      if (isPublicUrl(config.url)) return response;

      // check access token and it's invalid
      const { code } = response.data;
      if (isAuthenticate(code)) {
        const refreshToken = getLocalRefreshToken();

        return client
          .get(AUTH_RE_LOGIN, {
            headers: { "x-token-refresh": refreshToken },
          })
          .then(async (rs) => {
            return await client({
              ...config,
              headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.REACT_APP_API_KEY,
              },
            });
          });
      }
      return response;
    } catch (error) {
      return Promise.reject({ message: "Client error" });
    }
  },
  (err) => {
    try {
      if (err.code === "ERR_NETWORK") {
        if (!err.response) {
          return Promise.reject({
            message: "[NET-ERR] Server not found",
          });
        } else {
          return Promise.reject({
            message: "[NET-ERR]! Check your connection",
          });
        }
      }
      // Second check refresh token but refresh token is invalid too
      if (isAuthenticate(err.response.status)) {
        setLocalRefreshToken("");
      }
      return Promise.reject(err.response?.data);
    } catch (error) {
      return Promise.reject({ message: "Client error" });
    }
  }
);

export default client;
