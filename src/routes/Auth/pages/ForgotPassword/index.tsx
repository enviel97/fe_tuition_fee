import Divider from "@components/Divider";
import Spacing from "@components/Spacing";
import { useRef, useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import { Link, useSearchParams } from "react-router-dom";
import {
  AuthContainer,
  FormContainer,
  FormLink,
  FormTitle,
} from "../../styles/form.styles";
import ChangePasswordForm from "./form/NewPasswordForm";
import ConfirmMailForm from "./form/ConfirmMailForm";
import VerifyMailForm from "./form/VerifyMailForm";

const ForgotPasswordPage = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [searchParams] = useSearchParams();
  const email = useRef(searchParams.get("email") ?? "");

  return (
    <AuthContainer>
      <FormContainer
        className='f-column'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FormTitle>Forgot Password</FormTitle>
        <Stepper connectorStateColors activeStep={stepIndex}>
          <Step label='Enter email' />
          <Step label='Verify email' />
          <Step label='Change password' />
        </Stepper>
        {stepIndex === 0 && (
          <VerifyMailForm
            email={email.current}
            onSubmit={({ email: e }) => {
              email.current = e;
              setStepIndex(1);
            }}
          />
        )}
        {stepIndex === 1 && (
          <ConfirmMailForm
            email={email.current}
            changeEmail={() => setStepIndex(0)}
            onSubmit={() => setStepIndex(2)}
          />
        )}
        {stepIndex === 2 && <ChangePasswordForm email={email.current} />}
        <FormLink className='c'>
          <Divider />
          <Spacing.Vertical size='10px' />
          <Link to='/auth'>
            You have account ? <strong>Click here</strong> to login
          </Link>
        </FormLink>
      </FormContainer>
    </AuthContainer>
  );
};
export default ForgotPasswordPage;
