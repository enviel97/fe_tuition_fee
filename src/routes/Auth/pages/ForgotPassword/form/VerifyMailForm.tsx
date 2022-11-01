import { ButtonTextNeumorphism } from "@components/Button";
import Spacing from "@components/Spacing";
import { TextFieldNeumorphism } from "@components/TextInput";
import { PromiseToast } from "@components/Toast/promise";
import { verifyEmail } from "@routes/Auth/repo/password_handler.repo";
import { Form, FormRow } from "@routes/Auth/styles/form.styles";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import StepperFormContainer from "../components/StepperFormContainer";

const StepperForm = styled(Form)`
  width: 100%;
  gap: 0;
  align-items: flex-end;
  & .btn {
    margin-top: 1rem;
  }
`;
interface VerifyFormValue {
  email: string;
}

interface VerifyMailFormProps {
  email?: string;
  onSubmit: (data: VerifyFormValue) => void;
}

const VerifyMailForm = (props: VerifyMailFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: props.email ?? "",
    },
  });

  const onSubmit = (data: VerifyFormValue) => {
    PromiseToast({
      action: async () => await verifyEmail(data.email),
      onSuccess: () => {
        props.onSubmit(data);
      },
    });
  };

  return (
    <StepperFormContainer>
      <StepperForm onSubmit={handleSubmit(onSubmit)}>
        <Spacing.Vertical />
        <FormRow>
          <TextFieldNeumorphism
            label='Email'
            register={register("email", {
              required: "* Please enter your email",
            })}
            errorMess={errors.email?.message}
          />
          <caption>* Enter your email you want to get password</caption>
        </FormRow>

        <Spacing.Vertical />

        <ButtonTextNeumorphism
          className='btn'
          width='150px'
          type='submit'
          text='Send code'
        />
      </StepperForm>
    </StepperFormContainer>
  );
};

export default VerifyMailForm;
