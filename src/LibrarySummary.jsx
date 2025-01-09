import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "./actions";

const LibrarySummary = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const totalBooks = useSelector((state) => state.totalBooks);

  const handleRemoveBook = (isbn) => {
    dispatch(removeBook(isbn));
  };

  return (
    <div>
      <h2>Library Summary</h2>
      <p>Total Books: {totalBooks}</p>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author} (ISBN: {book.isbn})
            <button onClick={() => handleRemoveBook(book.isbn)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibrarySummary;
