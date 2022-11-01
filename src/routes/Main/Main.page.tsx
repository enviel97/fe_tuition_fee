import useAuthenticate from "@hooks/useAuthenticate";
import { Navigate, Outlet } from "react-router-dom";
import Drawer from "./components/Drawer";
import ScrollToTop from "./components/ScrollToTop";

import { MainContainer, MainScreens } from "./styles/main.styles";

const MainLayout = () => {
  const { isAuthenticate } = useAuthenticate();
  if (isAuthenticate) {
    return (
      <MainContainer>
        <Drawer />
        <ScrollToTop>
          <MainScreens id='app'>
            <div className='root'>
              <Outlet />
            </div>

            <footer className='decorate'>
              &copy; Copyright {new Date().getFullYear()}
            </footer>
          </MainScreens>
        </ScrollToTop>
      </MainContainer>
    );
  }
  return <Navigate to='/auth' />;
};

export default MainLayout;
