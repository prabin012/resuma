import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/Home";
import Login from "../Auth/Login";

export const route = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
