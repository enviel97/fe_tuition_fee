export const isPublicUrl = (uri: string | undefined) => {
  if (!uri) return false;
  return uri.indexOf("/auth") >= 0;
};

export const isOK = (statusCode: number) => {
  if (!statusCode) return false;
  return (statusCode >= 200 && statusCode <= 299) || statusCode === 304;
};

export const isAuthenticate = (statusCode?: number) => {
  return statusCode && statusCode === 401;
};
