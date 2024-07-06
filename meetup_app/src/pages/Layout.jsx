import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <>
      <div>
        {/* //navbar */}
        <div className="bg-red-500 fixed top-0 left-0 h-16 w-full">
          <Navbar />
        </div>
        {/* page */}
        <div className="bg-yellow-500 mt-16 min-h-[100vh]">
          <Outlet />
        </div>
      </div>
    </>
  );
};
