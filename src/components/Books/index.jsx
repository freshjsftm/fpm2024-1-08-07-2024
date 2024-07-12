import Book from './Book';
import { getBooks } from '../../api';
import useDataLoad from '../../hooks/useDataLoad';

const Books = () => {
  const { data:books, isPending, error } = useDataLoad(getBooks);
  const showBooks = (book) => <Book key={book.id} book={book} />;
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error.toString()}</h3>;
  }
  if (books.length === 0) {
    return <h3>books not found</h3>;
  }
  return <section>{books.map(showBooks)}</section>;
};

export default Books;
