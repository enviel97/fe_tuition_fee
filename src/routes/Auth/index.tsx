import { Route } from "react-router-dom";
import AuthPage from "./Auth.page";
import { CHANGE_PASSWORD, FORGOT_PASSWORD, SIGN_IN } from "./common/page";
import ChangePassword from "./pages/ChangePassword";
import ForgotPasswordPage from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";

const AuthRoute = (
  <Route path={SIGN_IN} key='auth' element={<AuthPage />}>
    <Route index element={<SignIn />} />
    <Route path={FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
    <Route path={CHANGE_PASSWORD} element={<ChangePassword />} />
  </Route>
);

export default AuthRoute;
