import { Navigate, Outlet } from "react-router-dom";
import { AuthContainer } from "./styles/form.styles";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { authReLogin } from "./repo/auth.repo";
import { isOK } from "@core/helper/validate_code";
import { toast } from "react-toastify";
import PageLoading from "@components/Loading/PageLoading";
import { parseName } from "@helpers/string";
import useAuthenticate from "@hooks/useAuthenticate";

const loadAuth = async () => {
  const response = await authReLogin();
  if (isOK(response.code)) {
    if (response.data) {
      return `Welcome back ${parseName(response.data)}`;
    }
    return response.message;
  }
  throw new Error("Unknown error");
};
const AuthPage = () => {
  const [isLoading, setLoading] = useState<boolean | undefined>(undefined);
  const { isAuthenticate, setIsAuthenticate } = useAuthenticate();

  useEffect(() => {
    setLoading(true);
    loadAuth()
      .then((res) => {
        toast.success(res, {
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          autoClose: 700,
        });
        setIsAuthenticate(true);
      })
      .catch((error) => {
        if (isOK(error?.code ?? 200)) {
          return;
        }
        toast.error(error.message ?? error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      });
  }, [setIsAuthenticate]);

  if (isAuthenticate) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <AnimatePresence mode='wait'>
      <AuthContainer>
        {isLoading === false ? <Outlet /> : <PageLoading />}
      </AuthContainer>
    </AnimatePresence>
  );
};

export default AuthPage;
