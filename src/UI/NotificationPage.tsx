import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const NotificationPage = () => {
  return (
    <div className="flex items-center justify-center  bg-[#1f1f28] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center p-8 rounded-3xl bg-gray-900/50 backdrop-blur-md border border-green-600/30 shadow-xl max-w-lg w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <FaRocket className="text-4xl text-green-500" />
        </motion.div>
        <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
          🚧 Coming Soon
        </h1>
        <p className="text-gray-300 text-lg mb-4">
          We're crafting something amazing! This project is under construction.
        </p>
        <p className="text-gray-400 text-sm mb-6">
          Stay tuned for updates. We'll launch soon with exciting features!
        </p>
      </motion.div>
    </div>
  );
};

export default NotificationPage;
