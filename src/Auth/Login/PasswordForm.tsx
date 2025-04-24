const PasswordForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-lime-200 dark:from-[#1f1f28] dark:to-[#2a2a3c] px-4">
      <div className="bg-white dark:bg-[#1f1f28] p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <div className="mb-6">
          <i className="ri-login-circle-line text-5xl text-green-600"></i>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
            Welcome Back
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Enter password.
          </p>
        </div>

        <form className="space-y-6">
          <div className="text-left">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Password
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 bg-white dark:bg-[#2a2a3c] text-gray-900 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-900 cursor-pointer hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
          >
            Login
            <i className="ri-login-box-line text-lg"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordForm;
