import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/Home";
import Login from "../Auth/Login";
import Dashboard from "../Components/Dashboard";

export const route = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
