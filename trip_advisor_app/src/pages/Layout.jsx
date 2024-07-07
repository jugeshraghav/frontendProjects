import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <>
      <div>
        <Navbar />

        <div
          style={{
            backgroundColor: "black",
            minHeight: "100vh",
            minWidth: "99vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            paddingBottom: "10px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};
