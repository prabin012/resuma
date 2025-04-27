import { useState } from "react";
import LoginForm from "./LoginForm";
import PasswordForm from "./PasswordForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [currentStep] = useState<number>(0);
  switch (currentStep) {
    case 0:
      return <LoginForm />;
    case 1:
      return <PasswordForm />;
    case 2:
      return <RegisterForm />;

    default:
      return <LoginForm />;
  }
};

export default Login;
