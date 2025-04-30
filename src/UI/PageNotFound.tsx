import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SimpleAttractive404() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1f1f26] text-gray-300 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          404
        </h1>
        <h2 className="text-2xl font-light mb-4 text-white">Page Not Found</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Sorry, I couldn't find the page you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 flex items-center justify-center">
            <Home size={18} className="mr-2" />
            <span>Prabin Kumar Mahato</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2  bg-[#2a2a35] text-gray-300 rounded-md hover:bg-[#32323e] transition duration-200 flex items-center justify-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            <span>Go Back</span>
          </button>
        </div>
        <div className="mt-16">
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-500">© 2025 prabinmahato.com.np</p>
        </div>
      </div>
    </div>
  );
}
