import { MovieCard } from "../components/MovieCard";
import { Navbar } from "../components/Navbar";
import { useMovieContext } from "../contexts/MovieContext";
import { MovieNotFound } from "./MovieNotFound";

export const Home = () => {
  const {
    state: { allMovies },
  } = useMovieContext();

  //early return
  if (allMovies.length === 0) return <MovieNotFound />;

  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {allMovies?.map((movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
