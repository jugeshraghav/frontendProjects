import "./App.css";
import { Continents } from "./pages/Continents";
import { Countries } from "./pages/Countries";
import { DestinationDetails } from "./pages/DestinationDetails";
import { Destinations } from "./pages/Destinations";
import { Layout } from "./pages/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Continents />} />
          <Route path="/:continentId" element={<Countries />} />
          <Route path="/:continentId/:countryId" element={<Destinations />} />
          <Route
            path="/:continentId/:countryId/:destinationId"
            element={<DestinationDetails />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
