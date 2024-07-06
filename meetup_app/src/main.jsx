import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { MeetupContextProvider } from "./contexts/MeetupContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MeetupContextProvider>
        <App />
      </MeetupContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
