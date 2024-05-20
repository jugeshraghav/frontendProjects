import { NavLink } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
  const getStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
  });
  return (
    <>
      <div className="navbar">
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
