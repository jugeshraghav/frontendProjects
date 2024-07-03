export const MovieCard = ({
  movie: {
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
  },
}) => {
  //   genre: ["Comedy", "Drama", "Musical"],

  //   cast: ["Ryan Gosling", "Emma Stone"],

  return (
    <>
      <div className="border-2 rounded-md shadow-lg w-60 h-80 text-xs ">
        <div className="h-1/2">
          <img
            src={imageURL}
            alt={title}
            className="rounded-t-md w-full h-full"
          />
        </div>
        <div className="h-1/2 p-2 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="text-gray-400">{summary.slice(0, 150)}...</p>
          </div>
          <button className=" border-2 border-gray-400 rounded-lg p-2 hover:bg-gray-500 hover:text-yellow-500">
            Add to Watchlist
          </button>
        </div>
      </div>
    </>
  );
};
