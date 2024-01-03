import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login page/Login";
import Register from "../pages/register page/Register";
import PrivateRoute from "./PrivateRoute";
import ViewCart from "../pages/view cart/ViewCart";

//Router path here...
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: "/",
            element: <PrivateRoute><Home/></PrivateRoute>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/register",
          element: <Register/>
        },
        {
          path:"/viewcart",
          element:<ViewCart/>
        }
      ]
    },
  ]);