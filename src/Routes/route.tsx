import { createHashRouter } from "react-router-dom";
import HomeLayout from "../Components/Home";

export const route = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
