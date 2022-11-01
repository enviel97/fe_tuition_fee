import { defer, Route } from "react-router-dom";
import { getBill } from "../Home/components/Bills/repos/bill.repo";
import FeePage from "./pages";
import PaymentPage from "./pages/Payment";

const FeeRoute = (
  <Route path='/fee' key='fee'>
    <Route index element={<FeePage />} />
    <Route
      path='payment/:id'
      loader={({ params }) => {
        return defer({ bill: getBill(params?.id ?? "") });
      }}
      element={<PaymentPage />}
    />
  </Route>
);
export default FeeRoute;
