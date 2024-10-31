import { useLoaderData, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
const BookDetails = () => {
  const { bookId } = useParams();
  console.log(bookId);

  const data = useLoaderData();
  console.log(data);

  const singleBook = data.find((book) => book.bookId === parseInt(bookId));
  console.log(singleBook, parseInt(bookId));

  //Destructure singleBook and show the book details
  const {
    image,
    author,
    review,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    bookName,
  } = singleBook;

  return (
    <div className="mb-10">
      <h1 className="text-4xl text-center my-10">Book Details</h1>
      <div className="flex justify-center items-center gap-10">
        <div>
          <img
            className="h-[1000px] w-[1000px] object-contain"
            src={image}
            alt=""
          />
        </div>
        <div className="w-8/12 mt-10">
          <h2 className="font-bold text-5xl mb-3">{bookName}</h2>
          <p className="text-2xl font-sans font-semibold">Author : {author}</p>
          <div className="divider mt-3"></div>
          <p className="font-sans font-semibold">{category}</p>
          <div className="divider"></div>
          <p className="font-sans">
            <span className="font-bold mb-4">Review</span> : {review}
          </p>
          <div className="mt-8 font-sans">
            Tag
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="rounded-2xl px-4 bg-lime-50 text-lime-700 py-1"
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <div className="font-sans">
            <p className="text-zinc-600">
              Number Of Page : <span className="text-black">{totalPages}</span>
            </p>
            <p className="text-zinc-600">
              Publisher : <span className="text-black">{publisher}</span>
            </p>
            <p className="text-zinc-600">
              Year Of Publishing :{" "}
              <span className="text-black">{yearOfPublishing}</span>
            </p>
            <div className="flex items-center gap-5">
              <p className="text-zinc-600">Rating :</p>
              <div className="flex items-center gap-1">
                <CiStar></CiStar> {rating}
              </div>
            </div>
            <div className="mt-10 flex gap-6">
              <button className="btn bg-white border-2 px-8">Read</button>
              <button className="btn bg-[#50B1C9] border-2 px-8 text-white">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
