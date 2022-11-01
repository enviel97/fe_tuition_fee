import { ButtonTextNeumorphism } from "@components/Button";
import useAuthenticate from "@hooks/useAuthenticate";
import { signOut } from "@routes/Auth/repo/auth.repo";
import { useNavigate } from "react-router-dom";
import { toast, ToastOptions } from "react-toastify";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setIsAuthenticate } = useAuthenticate();
  const logout = async () => {
    const option: ToastOptions = {
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      position: "top-right",
    };
    await signOut()
      .then((res) => {
        toast.success(res.message, { ...option, autoClose: 700 });
        setIsAuthenticate(false);
        navigate("/auth", {
          replace: true,
        });
      })
      .catch((error) => {
        const message = error.message ?? "Unknown error";
        toast.error(message, { ...option, autoClose: 2000 });
        if (
          message.toLowerCase().includes("token") ||
          message.toLowerCase().includes("login")
        ) {
          navigate("/auth", {
            replace: true,
          });
        }
      });
  };

  return <ButtonTextNeumorphism text='Logout' width='100%' onClick={logout} />;
};

export default LogoutButton;
