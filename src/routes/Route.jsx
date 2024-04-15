import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import EstateDetails from "../pages/Estates/EstateDetails";
import Reviews from "../pages/Reviews/Reviews";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch("/data.json")
        },
       
        {
            path: "/updateProfile",
            element: <UpdateProfile></UpdateProfile>
        },
       {
        path: "/login",
        element: <Login></Login>
       },
       {
        path: "/register",
        element: <Register></Register>
       },
       {
        path: "/estateDetail/:id",
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: ()=> fetch("/data.json")
       },
       {
        path: "/review",
        element: <Reviews></Reviews>,
        loader: ()=> fetch("/review.json")
       }
      ]
    },
  ]);

export default router