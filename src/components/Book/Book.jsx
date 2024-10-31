import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-5">
        <figure className="border bg-gray-100 p-5 rounded-2xl">
          <img className="h-[230px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body p-5">
          <div className="flex text-center gap-5 mb-4 ">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="rounded-2xl px-4 bg-lime-50 text-lime-700 font-sans py-1"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title text-3xl">{bookName}</h2>
          <p className="font-sans text-lg mb-2">By : {author}</p>
          <div className="border text-gray-700 border-dashed"></div>
          <div className="card-actions flex justify-between mt-3 font-sans">
            <div className="">{category}</div>
            <div className="flex items-center gap-1">
              <CiStar></CiStar>
              {rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
