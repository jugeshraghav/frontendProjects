import { createContext, useContext, useReducer } from "react";
import { initial_state, movie_reducer } from "../reducers/movieReducer";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movie_reducer, initial_state);
  const releaseYears = state?.allMovies?.reduce(
    (result, { year }) => (result.includes(year) ? result : [...result, year]),
    []
  );
  const moviesGenres = state.allMovies.reduce((genres, movie) => {
    movie.genre.forEach((genre) => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
    return genres;
  }, []);

  return (
    <MovieContext.Provider
      value={{ state, dispatch, releaseYears, moviesGenres }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("not inside the movie context");
  return context;
};
