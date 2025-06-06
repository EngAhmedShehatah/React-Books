import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDelete = () => {
    deleteBookById(book.id);
  };

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleShowEdit}>Edit</button>
        <button className="delete" onClick={handleDelete}>x</button>
      </div>

    </div>
  );
}

export default BookShow;