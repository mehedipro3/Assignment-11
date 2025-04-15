import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBooks from "../Pages/AddBooks/AddBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import Register from "../Pages/Register/Register";
import SingIn from "../Pages/SingIn/SingIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <h2>Router Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
    },
    {
      path : "/addBooks",
      element : <AddBooks></AddBooks>,
    },
    {
      path : "/allBooks",
      element : <AllBooks></AllBooks>,
      loader: () => fetch('http://localhost:3000/books')
    },
    {
      path : "/borrowedBooks",
      element : <BorrowedBooks></BorrowedBooks>,
    },
    {
      path : "/category/:categoryName",
      element : <CategoryPage></CategoryPage>,
      loader : ({params}) => fetch(`http://localhost:3000/books?category=${params.categoryName}`)
    },
    {
      path : "/register",
      element : <Register></Register>,
    },
    {
      path : "/singIn",
      element : <SingIn></SingIn> ,
    },
    ]
  },
]);
export default router;