import { MovieCard } from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import { MovieNotFound } from "./MovieNotFound";

export const Watchlist = () => {
  const {
    state: { watchlist },
  } = useMovieContext();

  //early return
  if (watchlist.length === 0) return <MovieNotFound />;

  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {watchlist?.map((movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
