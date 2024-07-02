import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Watchlist } from "./pages/Watchlist";
import { Starred } from "./pages/Starred";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/starred" element={<Starred />} />
      </Routes>
    </>
  );
}

export default App;
