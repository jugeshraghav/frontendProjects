import { MovieCard } from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import { MovieNotFound } from "./MovieNotFound";

export const Starred = () => {
  const {
    state: { starred },
  } = useMovieContext();

  //early return
  if (starred.length === 0) return <MovieNotFound />;

  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {starred?.map((movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
