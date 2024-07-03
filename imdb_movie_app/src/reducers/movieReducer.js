import { movies } from "../constants/data";

export const initial_state = {
  allMovies: movies,
  watchlist: [],
  starred: [],
  filters: {
    search: "",
    genre: "",
    year: "",
    rating: "",
  },
  isMovieModalOpen: false,
};

export const movie_reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_STARRED":
      return { ...state, starred: [...state.starred, payload] };
    case "REMOVE_FROM_STARRED":
      return {
        ...state,
        starred: state.starred.filter((movie) => movie.id !== payload.id),
      };
    case "ADD_TO_WATCHLIST":
      return { ...state, watchlist: [...state.watchlist, payload] };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.id !== payload.id),
      };
    case "SET_RATING":
      return { ...state, filters: { ...state.filters, rating: payload } };
    case "SET_YEAR":
      return { ...state, filters: { ...state.filters, year: payload } };
    case "SET_GENRE":
      return { ...state, filters: { ...state.filters, genre: payload } };
    case "SET_SEARCH":
      return { ...state, filters: { ...state.filters, search: payload } };
    case "OPEN_MOVIE_MODAL":
      return { ...state, isMovieModalOpen: true };
    case "CLOSE_MOVIE_MODAL":
      return { ...state, isMovieModalOpen: false };
    case "ADD_MOVIE":
      return { ...state, allMovies: [...state.allMovies, payload] };
    case "default":
      return state;
  }
};
