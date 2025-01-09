const initialState = {
  books: [],
  totalBooks: 0,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
        totalBooks: state.books.length + 1,
      };
    case "REMOVE_BOOK":
      const updatedBooks = state.books.filter(book => book.isbn !== action.payload);
      return {
        ...state, books: updatedBooks, totalBooks: updatedBooks.length
      }
    case "CALCULATE_TOTAL_BOOKS":
        return {
            ...state, totalBooks: state.books.length
        }
    default:
      return state;
  }
};

export default bookReducer;