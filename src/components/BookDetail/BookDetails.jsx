import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  console.log(bookId);

  const data = useLoaderData();
  console.log(data);

  const singleBook = data.find((book) => book.bookId === parseInt(bookId));
  console.log(singleBook, parseInt(bookId));

  //Destructure singleBook and show the book details

  return (
    <div>
      <h1>Book Details : {bookId}</h1>
      <div>
        <h1>{singleBook.bookName}</h1>
      </div>
    </div>
  );
};

export default BookDetails;
