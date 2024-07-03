import { useMovieContext } from "../contexts/MovieContext";

export const Filter = () => {
  const { releaseYears, moviesGenres, dispatch } = useMovieContext();
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //handlers
  const setRatingHandler = (e) => {
    dispatch({ type: "SET_RATING", payload: e.target.value });
  };
  const setGenreHandler = (e) => {
    dispatch({ type: "SET_GENRE", payload: e.target.value });
  };
  const setReleaseYearHandler = (e) => {
    dispatch({ type: "SET_YEAR", payload: e.target.value });
  };
  const setSearchTextHandler = (e) => {
    const text = e.target.value.toLowerCase();
    dispatch({ type: "SET_SEARCH", payload: text });
  };

  const openMovieModalHandler = () => {
    dispatch({ type: "OPEN_MOVIE_MODAL" });
  };

  return (
    <>
      <div className="text-sm flex flex-col md:flex-row justify-between   gap-4 p-2 my-8">
        <div className="flex items-center gap-4">
          <button
            className="  border-2 border-gray-400 rounded-lg p-2 bg-gray-500 text-yellow-500"
            onClick={() => openMovieModalHandler()}
          >
            Add Movie
          </button>
          {/* Search */}
          <div>
            <input
              type="text"
              className="border rounded-lg p-2"
              placeholder="enter title, cast or director"
              onChange={setSearchTextHandler}
            ></input>
          </div>
        </div>

        {/* Filters */}
        <div className="flex  items-center gap-4">
          {/* Genre */}
          <div>
            <select
              defaultValue={""}
              className="border rounded-lg p-2"
              onChange={setGenreHandler}
            >
              <option value={""}>All Genres</option>
              {moviesGenres?.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          {/* Years  */}
          <div>
            <select
              defaultValue={""}
              className="border rounded-lg p-2"
              onChange={setReleaseYearHandler}
            >
              <option value={""}>All Years</option>
              {releaseYears?.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {/* Ratings */}
          <div>
            <select
              defaultValue={""}
              className="border rounded-lg p-2"
              onChange={setRatingHandler}
            >
              <option value={""}>All Ratings</option>
              {ratings?.map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
