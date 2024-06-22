import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RestaurantDetails } from "./pages/RestaurantDetails";

function App() {
  return (
    <>
      <h1>Hello from My Restaurant App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant_details" element={<RestaurantDetails />} />
      </Routes>
    </>
  );
}

export default App;
