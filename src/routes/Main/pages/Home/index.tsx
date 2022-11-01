import { Route } from "react-router-dom";
import HomePage from "./Home.page";

const HomeRoute = (
  <Route path='/home' key='Home'>
    <Route index element={<HomePage />} />
  </Route>
);
export default HomeRoute;
