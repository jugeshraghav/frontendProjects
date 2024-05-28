import "./App.css";
import { Habit_Modal } from "./components/Habit_modal";
import { Navbar } from "./components/Navbar";
import { Archive } from "./pages/Archive";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Habit_Modal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </>
  );
}

export default App;
