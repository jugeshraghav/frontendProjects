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
    case "default":
      return state;
  }
};
