import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <>
      <div className="bg-gray-500 text-yellow-500 flex gap-3 justify-between items-center md:flex-row p-4 ">
        <div className="font-bold text-2xl  ">IMDB</div>
        <div className="flex flex-row gap-10 ">
          <NavLink to="/" style={getStyle}>
            Home
          </NavLink>
          <NavLink to="/watchlist" style={getStyle}>
            Watchlist
          </NavLink>
          <NavLink to="/starred" style={getStyle}>
            Starred
          </NavLink>
        </div>
      </div>
    </>
  );
};
