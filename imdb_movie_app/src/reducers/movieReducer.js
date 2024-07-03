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
    case "default":
      return state;
  }
};
