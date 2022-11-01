import client from "@core/api/axios";
import { isOK } from "@core/helper/validate_code";
import { BILL_GET, BILL_GET_ALL } from "../../../common/url";

interface GetBillsRequest {
  friendlyId?: string;
}

export const getBills = async (req?: GetBillsRequest) => {
  const response = await client.get(
    `${BILL_GET_ALL}?friendlyId=${req?.friendlyId ?? ""}`
  );
  if (isOK(response.status)) {
    const { message, data } = response.data;
    return {
      code: response.status,
      message: message,
      data: data,
    };
  }

  throw new Error("Unknown error");
};

export const getBill = async (billId: string) => {
  if (!billId) {
    throw new Error("Unknown bill");
  }
  const response = await client.get(`${BILL_GET}/${billId}`);
  if (isOK(response.status)) {
    const { message, data } = response.data;
    return {
      code: response.status,
      message: message,
      data: data,
    };
  }

  throw new Error("Unknown error");
};
