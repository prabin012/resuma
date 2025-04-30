const NotFound = () => {
  return (
    <div className="max-h-[80vh] p-20 flex flex-col items-center justify-center ">
      {/* Image */}
      <img
        src="/image/notfound.png"
        alt="404 Not Found"
        className=" h-auto md:max-w-sm "
      />

      {/* Text Content */}
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Oops! It looks like you’ve wandered off the path. The page you’re
          looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
