import { NavLink } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
  const getStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    textDecoration: "none",
  });
  return (
    <>
      <div
        className="navbar"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "end",
        }}
      >
        <NavLink to="/" style={getStyle}>
          Inbox
        </NavLink>
        <NavLink to="/spam" style={getStyle}>
          Spam
        </NavLink>
        <NavLink to="/trash" style={getStyle}>
          Trash
        </NavLink>
      </div>
    </>
  );
};
