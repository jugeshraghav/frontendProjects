import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";

export const MovieModal = () => {
  const {
    state: { isMovieModalOpen },
    dispatch,
  } = useMovieContext();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    year: "",
    cast: [],
    genre: [],
    rating: "",
    director: "",
    writer: "",
    imageURL: "",
  });

  const {
    title,
    summary,
    year,
    cast,
    genre,
    rating,
    director,
    writer,
    imageURL,
  } = formData;

  //handlers
  const closeModalHandler = (e) => {
    e.stopPropagation();
    dispatch({ type: "CLOSE_MOVIE_MODAL" });
  };
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const submitHandler = (e) => {
    e.preventDefault();

    const trimmedFormData = {
      title: formData.title.trim(),
      summary: formData.summary.trim(),
      year: formData.year.trim(),
      cast: formData.cast.trim(),
      genre: formData.genre.trim(),
      rating: formData.rating.trim(),
      director: formData.director.trim(),
      writer: formData.writer.trim(),
      imageURL: formData.imageURL.trim(),
    };
    const requiredFields = [
      "title",
      "summary",
      "year",
      "cast",
      "genre",
      "rating",
      "director",
      "writer",
    ];
    const areRequiredFieldsEmpty = requiredFields.some(
      (field) => !trimmedFormData[field]
    );

    if (areRequiredFieldsEmpty) {
      alert("Please fill in all required fields.");
      return;
    }

    const newMovie = {
      id: uuid(),
      ...trimmedFormData,
      year: parseInt(trimmedFormData.year),
      cast: trimmedFormData.cast.split(",").map((item) => item.trim()),
      genre: trimmedFormData.genre.split(",").map((item) => item.trim()),
      rating: parseInt(trimmedFormData.rating),
      imageURL: trimmedFormData.imageURL || "https://picsum.photos/200/300",
    };

    console.log(newMovie);
    dispatch({ type: "ADD_MOVIE", payload: newMovie });

    closeModalHandler(e);
  };
  return (
    isMovieModalOpen && (
      <div className="fixed top-0 left-0  w-full h-full z-10 flex justify-center items-center">
        <form
          className="flex flex-col gap-4 w-80 bg-white p-8 text-sm"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="flex justify-between">
            {" "}
            <h1 className="font-bold text-center text-xl">Add Movie</h1>
            <button
              onClick={(e) => closeModalHandler(e)}
              className="  border-2 border-gray-400 rounded-full w-10 h-10 font-bold text-yellow-500"
            >
              ✕
            </button>
          </div>

          <input
            placeholder="Title"
            className="border p-2"
            name="title"
            value={title}
            onChange={handleInputChange}
            required
          />
          <select
            name="year"
            value={year}
            onChange={handleInputChange}
            className="px-3 py-2 border rounded w-full"
            required
          >
            <option value="">Select Year</option>
            {Array.from(
              { length: new Date().getFullYear() - 1900 },
              (_, index) => (
                <option key={index} value={new Date().getFullYear() - index}>
                  {new Date().getFullYear() - index}
                </option>
              )
            )}
          </select>
          <select
            name="rating"
            value={rating}
            onChange={handleInputChange}
            className="px-3 py-2 border rounded w-full"
            required
          >
            <option value="">Select Rating</option>
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <input
            placeholder="Cast (comma separated values)"
            className="border p-2"
            name="cast"
            type="text"
            value={cast}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Director"
            className="border p-2"
            name="director"
            type="text"
            value={director}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Genre (comma separated values)"
            className="border p-2"
            name="genre"
            type="text"
            value={genre}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Writer"
            className="border p-2"
            name="writer"
            value={writer}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="ImageURL"
            className="border p-2"
            name="imageURL"
            value={imageURL}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="summary"
            className="border p-2"
            name="summary"
            value={summary}
            onChange={handleInputChange}
            required
          ></textarea>
          <button
            type="submit"
            className="  border-2 border-gray-400 rounded-lg p-2 bg-gray-500 text-yellow-500"
          >
            Submit
          </button>
        </form>
      </div>
    )
  );
};
