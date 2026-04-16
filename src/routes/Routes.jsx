import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/homepage/books/Books";
import Errorpage from "../pages/homepage/Errorpage/Errorpage";
import BookDetails from "../pages/homepage/bookdetails/BookDetails";

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
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails />,
      },
    ],
    errorElement: <Errorpage />,
  },
]);
