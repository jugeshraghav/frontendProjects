import { books } from "../constants/bookData";

export const initial_state = {
  allBooks: books,
};

export const bookReducer = (state = initial_state, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_SHELF":
      return {
        ...state,
        allBooks: state.allBooks.map((book) =>
          book._id === action.payload.selectedBookId
            ? { ...book, shelfCategory: action.payload.category }
            : { ...book }
        ),
      };
    default:
      return state;
  }
};
