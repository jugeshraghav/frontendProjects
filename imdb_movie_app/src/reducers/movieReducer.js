import { movies } from "../constants/data";

const initial_state = {
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
