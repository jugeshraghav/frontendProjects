import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TripAdvisorContextProvider } from "./Contexts/TripAdvisorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TripAdvisorContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TripAdvisorContextProvider>
  </React.StrictMode>
);
