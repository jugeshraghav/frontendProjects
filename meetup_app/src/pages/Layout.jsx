import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <>
      <div>
        {/* //navbar */}
        <div className=" fixed top-0 left-0  z-10 h-16  w-full bg-white">
          <Navbar />
        </div>
        {/* page */}
        <div className="bg-gray-100 mt-16 min-h-[100vh]">
          <Outlet />
        </div>
      </div>
    </>
  );
};
