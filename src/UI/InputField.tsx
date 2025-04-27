import { FC, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  placeholder?: string;
  error?: FieldError;
  type?: string;
  sizes?: "small" | "medium" | "large";
}

const InputField: FC<InputFieldProps> = ({
  label,
  placeholder = "",
  error,
  type = "text",
  sizes = "medium",
  ...props
}) => {
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-3 text-base",
    large: "py-3 px-4 text-lg",
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={props?.name}
        className="text-gray-700 dark:text-gray-200 font-medium mb-1"
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className={`border rounded-lg focus:outline-none focus:ring-1  dark:bg-[#1f1f28] dark:border-gray-700 dark:text-white ${
          sizeClasses[sizes]
        } ${error ? "focus:ring-red-600" : "focus:ring-green-600"}`}
      />

      {error && (
        <span className="text-red-500 text-xs mt-1">
          {error.message || `${label} is required!`}
        </span>
      )}
    </div>
  );
};

export default InputField;
