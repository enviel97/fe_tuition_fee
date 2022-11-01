import client from "@core/api/axios";
import { isOK } from "@core/helper/validate_code";
import {
  CHANGE_PASSWORD,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_VERIFY_EMAIL,
  FORGOT_PASSWORD_VERIFY_OTP,
} from "../common/urls";

export const changePassword = async (
  email: string,
  oldPassword: string,
  newPassword: string
) => {
  try {
    const response = await client.post(CHANGE_PASSWORD, {
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
    if (isOK(response.status)) {
      return response.data.message;
    }
    throw new Error("Unknown Error");
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const verifyEmail = async (email: string) => {
  try {
    const response = await client.post(FORGOT_PASSWORD_VERIFY_EMAIL, {
      email: email,
    });
    if (isOK(response.status)) {
      return response.data.message;
    }
    throw new Error("Unknown Error");
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const VerifyOtp = async (email: string, otp: string) => {
  try {
    const response = await client.post(FORGOT_PASSWORD_VERIFY_OTP, {
      email: email,
      otp: otp,
    });
    if (isOK(response.status)) {
      return response.data.message;
    }
    throw new Error("Unknown Error");
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const forgotPassword = async (email: string, newPassword: string) => {
  try {
    const response = await client.post(FORGOT_PASSWORD, {
      email: email,
      newPassword: newPassword,
    });
    if (isOK(response.status)) {
      return response.data.message;
    }
    throw new Error("Unknown Error");
  } catch (e: any) {
    throw new Error(e.message);
  }
};
