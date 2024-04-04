import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Root/Root";
import Career from "../Pages/Career";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);
