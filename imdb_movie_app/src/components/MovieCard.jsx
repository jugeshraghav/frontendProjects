import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useMovieContext } from "../contexts/MovieContext";
import { useNavigate } from "react-router-dom";
export const MovieCard = ({ movie }) => {
  const { id, title, imageURL, summary } = movie;

  const {
    state: { watchlist, starred },
    dispatch,
  } = useMovieContext();

  const navigate = useNavigate();

  const isInWatchlist = watchlist.find((movie) => movie.id === id);
  const isInStarred = starred.find((movie) => movie.id === id);

  //handlers

  const addToStarredHandler = (movie) => {
    dispatch({ type: "ADD_TO_STARRED", payload: movie });
  };
  const removeFromStarredHandler = (movie) => {
    dispatch({ type: "REMOVE_FROM_STARRED", payload: movie });
  };
  const addToWatchlistHandler = (movie) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };
  const removeFromWatchlistHandler = (movie) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movie });
  };

  return (
    <>
      <div className="border-2 rounded-md shadow-lg w-60 h-80 text-xs relative cursor-pointer">
        <div className="h-1/2">
          <img
            src={imageURL}
            alt={title}
            className="rounded-t-md w-full h-full "
            onClick={(e) => {
              e.stopPropagation(), navigate(`/movie-details/${id}`);
            }}
          />
        </div>
        <div className="h-1/2 p-2 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="text-gray-400">{summary.slice(0, 150)}...</p>
          </div>
          <button
            className={
              isInWatchlist
                ? "border-2 border-gray-400 rounded-lg p-2 bg-gray-500 text-yellow-500"
                : " border-2 border-gray-400 rounded-lg p-2 "
            }
            onClick={() =>
              !isInWatchlist
                ? addToWatchlistHandler(movie)
                : removeFromWatchlistHandler(movie)
            }
          >
            {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>
        <div
          className="absolute top-0 right-0 p-2 rounded-full bg-white text-lg"
          onClick={() =>
            !isInStarred
              ? addToStarredHandler(movie)
              : removeFromStarredHandler(movie)
          }
        >
          {isInStarred ? (
            <AiFillStar className="text-yellow-500" />
          ) : (
            <AiOutlineStar />
          )}
        </div>
      </div>
    </>
  );
};
