import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getStyle = ({ isActive }) => {
    return { color: isActive ? "red" : "black" };
  };
  return (
    <>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/archive">Archive</NavLink>
    </>
  );
};
