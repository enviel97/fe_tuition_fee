import { Route, defer } from "react-router-dom";
import HistoryPage from "./pages";
import { getHistories } from "./repo/history";

const HistoryRoute = (
  <Route path='/history' key='history'>
    <Route
      index
      loader={() => {
        const transactions = getHistories();
        return defer({ transactions });
      }}
      element={<HistoryPage />}
    />
  </Route>
);
export default HistoryRoute;
