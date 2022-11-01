import client from "@core/api/axios";
import { isOK } from "@core/helper/validate_code";
import { HISTORY_GET_ALL } from "../common/url";

export const getHistories = async () => {
  const response = await client.get(HISTORY_GET_ALL);
  if (isOK(response.status)) {
    const { code, message, data } = response.data;
    return {
      code: code,
      message: message,
      data: data,
    };
  }
  // unknown error
  throw new Error("Unknown error");
};
