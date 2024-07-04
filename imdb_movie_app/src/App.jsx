import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Watchlist } from "./pages/Watchlist";
import { Starred } from "./pages/Starred";
import { Navbar } from "./components/Navbar";
import { MovieDetail } from "./pages/MovieDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/movie-details/:movieId" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
