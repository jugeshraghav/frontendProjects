import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RestaurantDetails } from "./pages/RestaurantDetails";
import { Container } from "@mui/material";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/restaurant_details/:restaurantName"
            element={<RestaurantDetails />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
