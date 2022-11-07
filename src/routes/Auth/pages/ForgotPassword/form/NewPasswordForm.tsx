import { ButtonTextNeumorphism } from "@components/Button";
import Divider from "@components/Divider";
import Spacing from "@components/Spacing";
import { TextFieldNeumorphism } from "@components/TextInput";
import { PromiseToast } from "@components/Toast/promise";
import { forgotPassword } from "@routes/Auth/repo/password_handler.repo";
import { Form, FormRow } from "@routes/Auth/styles/form.styles";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import StepperFormContainer from "../components/StepperFormContainer";

const StepperForm = styled(Form)`
  width: 100%;
  align-items: flex-end;
`;

interface NewPasswordFormValue {
  password: string;
  passwordConfirm: string;
}

interface NewPasswordFormProps {
  email: string;
}

const NewPasswordForm = (props: NewPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewPasswordFormValue>({
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });
  const navigator = useNavigate();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data: NewPasswordFormValue) => {
    PromiseToast({
      action: async () => await forgotPassword(props.email, data.password),
      onSuccess: () => {
        navigator({
          pathname: "/auth",
          search: `?${createSearchParams({
            email: props.email,
          })}`,
        });
      },
    });
  };

  return (
    <StepperFormContainer>
      <StepperForm onSubmit={handleSubmit(onSubmit)}>
        <Spacing.Vertical />
        <FormRow>
          <TextFieldNeumorphism
            label='New Password'
            security
            register={register("password", {
              required: "* Please enter password",
            })}
            errorMess={errors.password?.message}
          />
          <span>* Enter your email you want to get password</span>
        </FormRow>
        <FormRow>
          <TextFieldNeumorphism
            label='Confirm Password'
            security
            register={register("passwordConfirm", {
              required: "* Please enter password.",
              validate: (data) =>
                data === password.current || "* Confirm passwords do not .",
            })}
            errorMess={errors.passwordConfirm?.message}
          />
          <span>* Enter your email you want to get password</span>
        </FormRow>
        <Divider />
        <ButtonTextNeumorphism
          className='btn'
          width='150px'
          type='submit'
          text='Finish'
        />
      </StepperForm>
    </StepperFormContainer>
  );
};

export default NewPasswordForm;
