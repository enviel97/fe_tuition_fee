import { ButtonTextNeumorphism } from "@components/Button";
import TimerCountdown, {
  TimerCountdownController,
} from "@components/Loading/TimerCountdown";
import Spacing from "@components/Spacing";
import { TextFieldNeumorphism } from "@components/TextInput";
import { PromiseToast } from "@components/Toast/promise";
import {
  verifyEmail,
  VerifyOtp,
} from "@routes/Auth/repo/password_handler.repo";
import { Form } from "@routes/Auth/styles/form.styles";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import StepperFormContainer from "../components/StepperFormContainer";

const StepperForm = styled(Form)`
  width: 100%;
  gap: 0;
  align-items: flex-end;

  & .btn {
    margin-top: 1rem;
  }

  & span {
    width: 100%;
    font-size: 0.8em;
    color: ${({ theme }) => theme.disableColor};
  }

  & .neumorphism {
    padding: 0.2rem;
  }
`;

const StepperFormRow = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  & caption {
    color: ${({ theme }) => theme.disableColor};
  }
`;

interface ConfirmFormValue {
  pin: string;
}

interface ConfirmMailFormProps {
  email: string;
  onSubmit: () => void;
  changeEmail: () => void;
}

const ConfirmMailForm = (props: ConfirmMailFormProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      pin: "",
    },
  });
  const timerController = useRef<TimerCountdownController>(null);

  const onSubmit = (data: ConfirmFormValue) => {
    PromiseToast({
      action: async () => await VerifyOtp(props.email, data.pin),
      onSuccess: () => props.onSubmit(),
    });
  };

  return (
    <StepperFormContainer>
      <StepperForm onSubmit={handleSubmit(onSubmit)}>
        <span>
          Your code is send to email: <strong> {props.email}</strong>
          <br /> Please check your email to get code
        </span>

        <Spacing.Vertical />

        <StepperFormRow>
          <TextFieldNeumorphism
            className='f-1'
            type='number'
            placeholder='######'
            label='Pin'
            register={register("pin", {})}
          />
          <Spacing.Horizontal />
          <div className='neumorphism'>
            <TimerCountdown ref={timerController} limit={90} size={"2.5rem"} />
          </div>
        </StepperFormRow>

        <Spacing.Vertical />
        <StepperFormRow>
          <ButtonTextNeumorphism
            className='btn'
            width='150px'
            type='button'
            onClick={props.changeEmail}
            text='Change Email'
          />
          <Spacing.Horizontal size='0.5rem' />
          <ButtonTextNeumorphism
            className='btn'
            width='150px'
            type='submit'
            text='Verify'
          />
        </StepperFormRow>
        <Spacing.Vertical />
        <span
          className='link'
          style={{
            textAlign: "right",
          }}
          onClick={() => {
            PromiseToast({
              action: async () => await verifyEmail(props.email),
              onSuccess: (res) => {
                timerController.current?.reset();
                toast.success("Your otp is re-send to email");
              },
            });
          }}
        >
          If you don't see email, <strong>Cick here</strong> to resend code
        </span>
      </StepperForm>
    </StepperFormContainer>
  );
};

export default ConfirmMailForm;
