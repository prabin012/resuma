import { FC } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#1f1f28] text-gray-800 dark:text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default PageNotFound;
