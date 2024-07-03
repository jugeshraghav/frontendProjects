import { Filter } from "../components/FIlter";
import { MovieCard } from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import { MovieNotFound } from "./MovieNotFound";

export const Home = () => {
  const {
    state: {
      allMovies,
      filters: { rating, search, year, genre },
    },
  } = useMovieContext();

  const filteredMovies = allMovies.filter((movie) => {
    return (
      (year === "" || movie.year.toString() === year) &&
      (genre === "" || movie.genre.includes(genre)) &&
      (rating === "" || movie.rating >= parseInt(rating)) &&
      (search === "" ||
        movie.title.toLowerCase().includes(search) ||
        movie.cast.some((actor) => actor.toLowerCase().includes(search)) ||
        movie.director.toLowerCase().includes(search))
    );
  });

  return (
    <>
      <Filter />
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {filteredMovies?.map((movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
      {filteredMovies.length === 0 && <MovieNotFound />}
    </>
  );
};
