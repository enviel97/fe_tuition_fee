import { breakpoint } from "@common/breakpoint";
import Link from "@components/Link";
import { TextFieldNeumorphism } from "@components/TextInput";
import { ButtonTextNeumorphism } from "@components/Button";
import { PromiseToast } from "@components/Toast/promise";
import Divider from "@components/Divider";
import useAuthenticate from "@hooks/useAuthenticate";
import { signIn } from "@routes/Auth/repo/auth.repo";
import { Form, FormLink, FormTitle } from "@routes/Auth/styles/form.styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { FORGOT_PASSWORD, CHANGE_PASSWORD } from "@routes/Auth/common/page";
import styled from "styled-components";
import { setLocalUser } from "@core/helper/localStore";

interface LoginFormValues {
  email: string;
  password: string;
}

const SignInForm = styled(Form)`
  width: 30%;
  ${breakpoint.down("laptop")} {
    width: 50%;
  }
  ${breakpoint.down("tablet")} {
    width: 80%;
  }
`;

const SignIn = () => {
  const navigator = useNavigate();
  const { auth, setAuth } = useAuthenticate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [query] = useSearchParams();
  const email =
    auth?.currentUser?.email ?? query.get("email") ?? "nvloc.07.97@gmail.com";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: email,
      password: "Admin1",
    },
  });

  const _login = (res: any) => {
    setAuth({ currentUser: res.data });
    setLocalUser(res.data);
    navigator(from, { replace: true });
  };

  const onSubmit: SubmitHandler<LoginFormValues> = async ({
    email,
    password,
  }) => {
    PromiseToast({
      action: async () => await signIn(email, password),
      pending: "Sign in...",
      onSuccess: _login,
    });
  };

  return (
    <SignInForm
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FormTitle>Sign In</FormTitle>
      <TextFieldNeumorphism
        label='Email'
        register={register("email", {
          required: "* Please enter your email",
          pattern: {
            value: new RegExp(
              "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+"
            ),
            message: "* Email invalid",
          },
        })}
        errorMess={errors.email?.message}
      />
      <TextFieldNeumorphism
        label='Password'
        security
        register={register("password", {
          required: "* Please enter your password",
        })}
        errorMess={errors.password?.message}
      />
      <ButtonTextNeumorphism text={"Login"} width='100%' type='submit' />
      <Divider label='Or' />
      <FormLink>
        <Link to={CHANGE_PASSWORD} query={{ email }}>
          Change password
        </Link>
        <Link to={FORGOT_PASSWORD} query={{ email }}>
          Forgot password? <strong>Click here</strong>
        </Link>
      </FormLink>
    </SignInForm>
  );
};

export default SignIn;
