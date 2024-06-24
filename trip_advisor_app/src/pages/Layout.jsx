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
        }}
      >
        <Navbar />

        <div
          style={{
            height: "100vh",
            marginTop: "15vh",
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
