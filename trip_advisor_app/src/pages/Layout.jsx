import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { Navbar } from "../components/Navbar";
export const Layout = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "4",
        }}
      >
        <Navbar />

        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};
