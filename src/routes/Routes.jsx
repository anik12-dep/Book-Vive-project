import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/homepage/books/Books";
import Errorpage from "../pages/homepage/Errorpage/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
        ],
    errorElement: <Errorpage/>,
  },
]);
