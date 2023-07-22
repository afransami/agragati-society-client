import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Home/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <PrivateRoute><SignUp></SignUp></PrivateRoute>,
      },
    ],
  },
]);

export default router;
