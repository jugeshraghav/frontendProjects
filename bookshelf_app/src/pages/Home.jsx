import { BookCard } from "../components/BookCard";
import { useBookContext } from "../contexts/BookContext";
import "../App.css";

export const Home = () => {
  const { currentlyReading, wantToRead, read } = useBookContext();

  return (
    <>
      <h1>BookShelf</h1>

      <h3>Currently Reading</h3>
      <div className="book_shelf">
        {currentlyReading.map((book) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
      <h3>Want To Read</h3>
      <div className="book_shelf">
        {wantToRead.map((book) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
      <h3>Already Read</h3>
      <div className="book_shelf">
        {read.map((book) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
    </>
  );
};
