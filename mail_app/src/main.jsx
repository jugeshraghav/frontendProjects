import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MailProvider } from "./contexts/MailContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MailProvider>
        <App />
      </MailProvider>
    </BrowserRouter>
  </React.StrictMode>
);
