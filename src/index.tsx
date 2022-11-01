import { store } from "@core/redux/store";
import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <CookiesProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CookiesProvider>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
