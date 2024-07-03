import { createContext, useContext, useReducer } from "react";
import { initial_state, movie_reducer } from "../reducers/movieReducer";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movie_reducer, initial_state);
  return (
    <MovieContext.Provider value={{ state }}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("not inside the movie context");
  return context;
};
