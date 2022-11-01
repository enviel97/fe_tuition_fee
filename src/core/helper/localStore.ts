export const setLocalRefreshToken = (token: string) => {
  window.localStorage.setItem("Rf_t", token);
};

export const removeLocalRefreshToken = () => {
  window.localStorage.removeItem("Rf_t");
};

export const getLocalRefreshToken = () => {
  const refresh_token = window.localStorage.getItem("Rf_t");
  return refresh_token;
};

// remember user
export const removeLocalUser = () => {
  window.localStorage.removeItem("R_us");
};

export const getLocalUser = () => {
  const localUser = window.localStorage.getItem("R_us");
  return localUser && JSON.parse(localUser);
};

export const setLocalUser = (user: User) => {
  window.localStorage.setItem("R_us", JSON.stringify(user));
};
