import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SimpleAttractive404() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen   dark:bg-[#1f1f26]  px-4">
      <div className="w-full max-w-md bg-white dark:bg-[#0b1014] rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          {/* Illustration */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 bg-indigo-100 dark:bg-[#1f1f26] rounded-full flex items-center justify-center">
                <span className="text-5xl font-bold text-indigo-500 dark:text-indigo-300">
                  ?
                </span>
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                404
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Page Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Oops! The page you're looking for seems to have wandered off.
            </p>

            {/* Buttons */}
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => navigate("/")}
                className="w-full dark:bg-[#1f1f26] cursor-pointer hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center"
              >
                <Home size={18} className="mr-2" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
