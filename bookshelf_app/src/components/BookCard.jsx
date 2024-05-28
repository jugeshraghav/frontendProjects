import { useState } from "react";
import "../App.css";
import { useBookContext } from "../contexts/BookContext";
export const BookCard = ({ book }) => {
  const { dispatch } = useBookContext();

  const handleChangeBookShelf = (e, bookId) => {
    const currentCategory = e.target.value;
    dispatch({
      type: "CHANGE_SHELF",
      payload: { selectedBookId: bookId, category: currentCategory },
    });
  };
  return (
    <>
      <div className="book_card">
        <img src={book.coverImg} />
        <select
          value={book.shelfCategory}
          onChange={(e) => handleChangeBookShelf(e, book._id)}
        >
          <option value="Currently Reading">Currently Reading</option>
          <option value="Want to Read">Want to Read</option>
          <option value="Read">Read</option>
          <option value="None">None</option>
        </select>
      </div>
    </>
  );
};
