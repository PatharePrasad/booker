import { useState } from "react";
import Form from "./Form";

function App() {
  const [books, setBooks] = useState([
    "The Great Gatsby",
    "The Catcher in the Rye",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
  ]);

  const updateBooks = (book) => {
    setBooks([book, ...books]);
  };

  const deleteBook = (book) => {
    
  }

  return (
    <>
      <header>
        <h1>Booker</h1>
      </header>

      <Form onSubmit={updateBooks} />

      {books.map((book) => (
        <pre key={book}>{book}</pre>
      ))}
    </>
  );
}

export default App;