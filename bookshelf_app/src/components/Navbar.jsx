import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const getStyle = ({ isActive }) => {
    return { color: isActive ? "red" : "black" };
  };
  return (
    <>
      <NavLink to="/" style={getStyle}>
        Home
      </NavLink>{" "}
      ||
      <NavLink to="/search" style={getStyle}>
        Search
      </NavLink>
    </>
  );
};
