import { Navigate, Route } from "react-router-dom";
import MainLayout from "./Main.page";
import FeeRoute from "./pages/Fee";
import HistoryRoute from "./pages/History";
import HomeRoute from "./pages/Home";

const MainRoute = (
  <Route path='/' key='main' element={<MainLayout />}>
    <Route index element={<Navigate to={"/home"} replace />} />
    <Route path='home'>{HomeRoute}</Route>
    <Route path='fee'>{FeeRoute}</Route>
    <Route path='history'>{HistoryRoute}</Route>
  </Route>
);

export default MainRoute;
