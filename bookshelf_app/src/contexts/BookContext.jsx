import { createContext, useContext, useReducer } from "react";
import { bookReducer, initial_state } from "../reducers/bookReducer";

const BookContext = createContext();

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("use context inside BookContextProvider");
  }
  return context;
};

export const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initial_state);
  const currentlyReading = state.allBooks.filter(
    ({ shelfCategory }) => shelfCategory === "Currently Reading"
  );
  const wantToRead = state.allBooks.filter(
    ({ shelfCategory }) => shelfCategory === "Want to Read"
  );
  const read = state.allBooks.filter(
    ({ shelfCategory }) => shelfCategory === "Read"
  );

  return (
    <BookContext.Provider
      value={{ state, dispatch, currentlyReading, wantToRead, read }}
    >
      {children}
    </BookContext.Provider>
  );
};
