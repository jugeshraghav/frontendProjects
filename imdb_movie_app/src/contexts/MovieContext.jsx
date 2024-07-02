import { createContext, useContext } from "react";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  return (
    <MovieContext.Provider value={{ item: 4 }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("not inside the movie context");
  return context;
};
