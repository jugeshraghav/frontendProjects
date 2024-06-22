import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { RestaurantContextProvider } from "./contexts/RestaurantContext.jsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RestaurantContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RestaurantContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
