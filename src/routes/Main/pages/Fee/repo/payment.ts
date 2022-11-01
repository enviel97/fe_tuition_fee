import client from "@core/api/axios";
import { isOK } from "@core/helper/validate_code";
import {
  FEE_PAYMENT,
  FEE_PAYMENT_CONFIRM,
  FEE_PAYMENT_REJECT,
} from "../common/url";

export const verifyPayment = async (beneficiaryId: string, billId: string) => {
  const response = await client.post(
    FEE_PAYMENT,
    { beneficiaryId, billId },
    { timeout: 6000 }
  );
  if (isOK(response.status)) {
    const { message, code } = response.data;
    return { code: code, message: message ?? "Payment" };
  }
  // unknown error
  throw new Error("Unknown error");
};

export const rejectPayment = async (billId: string) => {
  const response = await client.post(FEE_PAYMENT_REJECT, { billId });
  if (isOK(response.status)) {
    const { message, code } = response.data;
    return { code: code, message: message ?? "Payment" };
  }
  // unknown error
  throw new Error("Unknown error");
};

export const confirmPayment = async (
  beneficiaryId: string,
  otp: string,
  billId: string
) => {
  const response = await client.post(FEE_PAYMENT_CONFIRM, {
    beneficiaryId,
    otp,
    billId,
  });
  if (isOK(response.status)) {
    const { message, code } = response.data;
    return { code: code, message: message ?? "Payment" };
  }
  // unknown error
  throw new Error("Unknown error");
};
