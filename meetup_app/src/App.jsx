import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { EventDetails } from "./pages/EventDetails";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/event-details/:eventId" element={<EventDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
