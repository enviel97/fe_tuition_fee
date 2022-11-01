import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import NotFound from "@routes/Static/NotFound.page";
import PageLoading from "@components/Loading/PageLoading";
import { AuthProvider } from "@context/AuthContext";
import ToastProvider from "@components/Toast";
import MainRoute from "@routes/Main";
import AuthRoute from "@routes/Auth";
import ModalProvider from "@components/Modal";

// countdown framer motion
const App = () => {
  const env = process.env.REACT_APP_DEPLOY;
  const Router = env === "git" ? createHashRouter : createBrowserRouter;

  return (
    <AuthProvider>
      <ModalProvider>
        <RouterProvider
          router={Router(
            createRoutesFromElements(
              <Route
                path='/'
                key='root'
                element={<Outlet />}
                errorElement={<NotFound />}
              >
                {MainRoute}
                {AuthRoute}
              </Route>
            )
          )}
          fallbackElement={<PageLoading />}
        />
      </ModalProvider>
      <ToastProvider />
    </AuthProvider>
  );
};

export default App;
