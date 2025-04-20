import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./assets/index.css";
import { route } from "./Routes/route";
import "remixicon/fonts/remixicon.css";

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
