// File Purpose: // src/components/Bookshelf/Bookshelf.jsx
// This COMPONENT handles the entire bookshelf logic:
// - Uses React state to manage book input and book list
// - Renders a controlled form for adding books
// - Displays a dynamic list of books added by the user


// 4 steps to build COMPONENT (1-4)
// 1. importing useState hook from React
import { useState } from 'react';


// 2. defining the Bookshelf COMPONENT
const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };


  // 3. returning JSX
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />

          <label htmlFor="author">Author:</label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />

          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


// 4. exporting the Bookshelf COMPONENT so it can be used in App.jsx
export default Bookshelf;
