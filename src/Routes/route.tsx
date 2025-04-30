import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/Home";
import Login from "../Auth/Login";
import Dashboard from "../Components/Dashboard";
import PageNotFound from "../UI/PageNotFound";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/notFound",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
