import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HabitContextProvider } from "./contexts/Habit_context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HabitContextProvider>
        <App />
      </HabitContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
