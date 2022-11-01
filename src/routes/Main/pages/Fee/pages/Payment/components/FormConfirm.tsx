import { ButtonText } from "@components/Button";
import TimerCountdown from "@components/Loading/TimerCountdown";
import ModalConfirm from "@components/Modal/components/ModalConfirm";
import { useModals } from "@components/Modal/hooks/useModals";
import { TextFieldNeumorphism } from "@components/TextInput";
import { PromiseToast } from "@components/Toast/promise";
import { parseId, praseMoney } from "@helpers/string";
import useAuthenticate from "@hooks/useAuthenticate";
import usePrompt from "@hooks/usePrompt";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useAsyncValue, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { rejectPayment } from "../../../repo/payment";
import { PaymentRow } from "../../../styles/decorates/FormPaymentLoading.decorate";
import {
  FormConfirmContainer,
  Form,
  TimerCountdownContainer,
} from "../styles/FormConfirm.decorate";
import ModalPaymentConfirmOtp from "./ModalPaymentConfirmOtp";

interface ConfirmValue {
  otp: string;
}

const FormConfirm = () => {
  const response: any = useAsyncValue();
  const { auth } = useAuthenticate();
  const bill: Bill = response.data;
  const beneficiary = bill.to as User;
  const modelConfirm = useModals();
  const navigate = useNavigate();
  const totalBill = useMemo(
    () => bill.subjects.reduce((sum, current) => sum + current.money, 0) ?? 0,
    [bill]
  );

  const goBackPrevPage = () => {
    navigate(-1);
  };

  const onSubmit = (data: ConfirmValue) => {
    const id = parseId(bill);
    modelConfirm.show(
      <ModalPaymentConfirmOtp
        id={id}
        totalBill={totalBill}
        billId={parseId(id)}
        beneficiary={beneficiary}
        otp={data.otp}
        onErrorPayment={goBackPrevPage}
        onSuccessPayment={() => navigate("/history", { replace: true })}
      />,
      {
        key: id,
        isDialog: true,
        showCloseButton: false,
        height: "fit-content",
        width: "fit-content",
      }
    );
  };
  const onReject = async () => {
    PromiseToast({
      action: async () => await rejectPayment(parseId(bill)),
      pending: "Reject waiting...",
    });
  };

  const onTimeUp = () => {
    const id = "auto_reject";
    modelConfirm.show(
      <ModalConfirm
        modalKey={id}
        onConfirm={async () => {
          toast.error("Transaction is expired", {
            position: "bottom-right",
          });
          goBackPrevPage();
        }}
        justConfirm
        content={
          "* This invoice was declined because the payment confirmation timed out !!"
        }
      />,
      {
        key: id,
        isDialog: true,
        showCloseButton: false,
        height: "fit-content",
      }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmValue>();

  usePrompt(true, {
    message: "If you change this payment will be reject",
    onConfirm: onReject,
  });

  return (
    <FormConfirmContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <PaymentRow>
          <span>Available balance:</span>
          <strong>{praseMoney(auth?.currentUser?.amount ?? 0)}</strong>
        </PaymentRow>
        <TextFieldNeumorphism
          width='100%'
          label='OTP'
          type='number'
          placeholder='######'
          register={register("otp", { required: "* Otp is required" })}
          errorMess={errors.otp?.message}
        />
        <div className='row'>
          <ButtonText
            color='#aa0000'
            textColor='#cacaca'
            width='fit-content'
            text='Reject'
            onClick={() => {
              onReject().finally(goBackPrevPage);
            }}
          />
          <ButtonText
            type='submit'
            color='#212121'
            textColor='#cacaca'
            width='fit-content'
            text='Confirm'
          />
        </div>
      </Form>
      <TimerCountdownContainer>
        <TimerCountdown size='5rem' limit={300} onTimeUp={onTimeUp} />
      </TimerCountdownContainer>
    </FormConfirmContainer>
  );
};
export default FormConfirm;
