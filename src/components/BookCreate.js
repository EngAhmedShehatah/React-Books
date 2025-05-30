import { useState, useContext } from 'react';
import BooksContext from '../context/books';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const { createBook } = useContext(BooksContext);

  const handleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(event, title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add A Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" className="input" value={title} onChange={handleChange} />
        <button type="submit" className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;