import { ButtonTextNeumorphism } from "@components/Button";
import Divider from "@components/Divider";
import Spacing from "@components/Spacing";
import { TextFieldNeumorphism } from "@components/TextInput";
import { PromiseToast } from "@components/Toast/promise";
import { changePassword } from "@routes/Auth/repo/password_handler.repo";
import {
  AuthContainer,
  Form,
  FormContainer,
  FormLink,
  FormTitle,
} from "@routes/Auth/styles/form.styles";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  createSearchParams,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";

const ChangePasswordForm = styled(Form)`
  height: fit-content;
  width: 100%;
  gap: 2rem;
  align-items: flex-end;
  flex: 1;
`;

interface ChangePasswordValues {
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const ChangePassword = () => {
  const [searchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ChangePasswordValues>({
    defaultValues: {
      email: searchParams.get("email") ?? "",
    },
  });

  const navigator = useNavigate();
  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");

  const onSubmit: SubmitHandler<ChangePasswordValues> = async ({
    email,
    oldPassword,
    newPassword,
  }) => {
    PromiseToast({
      action: async () => await changePassword(email, oldPassword, newPassword),
      pending: "Change password ... ",
      onSuccess: (res) => {
        navigator({
          pathname: "/auth",
          search: `?${createSearchParams({
            email: email,
          })}`,
        });
      },
      position: "top-center",
    });
  };

  return (
    <AuthContainer>
      <AnimatePresence mode='wait'>
        <FormContainer
          className='f-column'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FormTitle>Change Password</FormTitle>
          <ChangePasswordForm
            onSubmit={handleSubmit(onSubmit)}
            className='f-center'
          >
            <TextFieldNeumorphism
              label='Email'
              errorMess={errors.email?.message}
              register={register("email", {
                required: "* Please enter your email",
                pattern: {
                  value: new RegExp(
                    "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+"
                  ),
                  message: "* Email invalid",
                },
              })}
            />
            <TextFieldNeumorphism
              label='Old password'
              security
              errorMess={errors.oldPassword?.message}
              register={register("oldPassword", {
                required: "* Please enter your old password",
              })}
            />
            <Divider label='New Password' />
            <TextFieldNeumorphism
              label='New password'
              security
              errorMess={errors.newPassword?.message}
              register={register("newPassword", {
                required: "* Please enter your new password",
              })}
            />
            <TextFieldNeumorphism
              label='Confirm password'
              security
              errorMess={errors.confirmNewPassword?.message}
              register={register("confirmNewPassword", {
                required: "* Please enter password.",
                validate: (data) =>
                  data === newPassword.current ||
                  "* Confirm passwords do not .",
              })}
            />

            <ButtonTextNeumorphism type='submit' text='Change' width='50%' />
          </ChangePasswordForm>
          <FormLink className='c'>
            <Divider />
            <Spacing.Vertical size='10px' />
            <Link to='/auth'>
              You have account ? <strong>Click here</strong> to login
            </Link>
          </FormLink>
        </FormContainer>
      </AnimatePresence>
    </AuthContainer>
  );
};

export default ChangePassword;
