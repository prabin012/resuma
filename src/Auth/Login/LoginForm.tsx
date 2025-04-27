import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "../../UI/InputField";

interface IEmailInput {
  email: string;
}

const LoginForm = () => {
  const emails = "kumarprabin936@gmail.com";
  const form = useForm<IEmailInput>();
  const navigate = useNavigate();
  const handleNext = (data: { email: string }) => {
    if (data?.email === emails) {
      navigate("/dashboard");
    } else {
      return form.setError("email", { message: "Didn't match !" });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-lime-200 dark:from-[#1f1f28] dark:to-[#2a2a3c] px-4">
      <div className="bg-white dark:bg-[#1f1f28] p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <div className="mb-6">
          <i className="ri-login-circle-line text-5xl text-green-600"></i>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
            Welcome Back
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Continue with your email.
          </p>
        </div>

        <form className="space-y-6" onSubmit={form.handleSubmit(handleNext)}>
          <div className="text-left">
            <InputField
              label="Email Address"
              placeholder="Enter your email"
              sizes="medium"
              type="email"
              {...form.register("email", { required: "Email is required" })}
              error={form.formState.errors.email}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-900 cursor-pointer hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
          >
            Proceed
            <i className="ri-login-box-line text-lg"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
