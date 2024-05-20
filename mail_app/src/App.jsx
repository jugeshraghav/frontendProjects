import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Inbox } from "./pages/Inbox";
import { Trash } from "./pages/Trash";
import { Spam } from "./pages/Spam";
import { Navbar } from "./components/Navbar";
import { MailDetail } from "./pages/MailDetail.jsx";
import { FilterBox } from "./components/FilterBox.jsx";

function App() {
  return (
    <>
      <div className="layout">
        <div>
          <Navbar />
          <FilterBox />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/spam" element={<Spam />} />
            <Route path="/mail/:mailId" element={<MailDetail />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
