import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MovieContextProvider } from "./contexts/MovieContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
