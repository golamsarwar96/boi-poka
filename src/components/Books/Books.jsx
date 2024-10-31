import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-10">
        Books : {books.length}
      </h2>
      <div className="grid gap-10 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

// 1. State to store the Books
// 2. UseEffect to load data
