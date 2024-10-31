const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen p-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/src/assets/books.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn bg-[#23BE0A] font-sans text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
