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
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Pages/Shared/ErrorPage";
import DetailsBook from "../Pages/DetailsBooks/DetailsBooks";
import UpdateBooks from "../Pages/UpdateBooks/UpdateBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
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
      element : <PrivateRouter><AllBooks></AllBooks></PrivateRouter>,
      loader: () => fetch('http://localhost:3000/books')
    },
    {
      path : `/updateBooks/:id`,
      element : <PrivateRouter><UpdateBooks></UpdateBooks></PrivateRouter>,
      loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
    },
    {
      path : "/borrowedBooks",
      element : <BorrowedBooks></BorrowedBooks>,
    },
    {
      path:'/details/:id',
      element:<PrivateRouter><DetailsBook></DetailsBook></PrivateRouter>,
      loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
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