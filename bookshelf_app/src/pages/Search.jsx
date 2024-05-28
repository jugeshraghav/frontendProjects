import { useState } from "react";
import { useBookContext } from "../contexts/BookContext";
import { BookCard } from "../components/BookCard";
import "../App.css";

export const Search = () => {
  const {
    state: { allBooks },
  } = useBookContext();
  const [searchText, setSearchText] = useState("");
  const foundBooks = searchText
    ? allBooks.filter(({ title }) =>
        title.toLowerCase().trim().includes(searchText.toLowerCase().trim())
      )
    : "";

  return (
    <>
      <h1>Search Books</h1>
      <input
        placeholder="Enter any book name to search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="book_shelf">
        {foundBooks ? (
          foundBooks.map((book) => <BookCard book={book} key={book._id} />)
        ) : (
          <h3>No Books Found!</h3>
        )}
      </div>
    </>
  );
};
