import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
