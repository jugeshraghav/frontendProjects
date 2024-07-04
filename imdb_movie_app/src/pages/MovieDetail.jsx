import { useParams } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const {
    state: { allMovies },
  } = useMovieContext();
  const currentMovie = allMovies.find((movie) => movie.id == movieId);
  const {
    id,
    title,
    imageURL,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
  } = currentMovie;
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 border-8 border-yellow-500 rounded-lg  w-8/12 md:h-80 mx-auto mt-20">
        <div className="w-full md:w-1/2">
          <img src={imageURL} alt={title} className="w-full h-full " />
        </div>
        <div className="w-full md:w-1/2 text-sm flex flex-col justify-between py-2 px-4 md:px-0">
          <h1 className="font-bold text-xl">{title}</h1>
          <p>
            <span className="font-bold">Cast : </span>
            <span>{cast.join(" , ")}</span>
          </p>
          <p>
            <span className="font-bold">Director : </span>
            <span>{director}</span>
          </p>
          <p>
            <span className="font-bold">Writer : </span>
            <span>{writer}</span>
          </p>
          <p>
            <span className="font-bold">Release Year : </span>
            <span>{year}</span>
          </p>
          <p>
            <span className="font-bold">Rating : </span>
            <span>{rating}</span>
          </p>
          <p>
            <span className="font-bold">Summary : </span>
            <span>{summary}</span>
          </p>
          <p>
            <span className="font-bold">Genre : </span>
            <span>{genre.join(",")}</span>
          </p>
        </div>
      </div>
    </>
  );
};
