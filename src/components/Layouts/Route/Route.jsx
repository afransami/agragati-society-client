import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Home/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Admin from "../../Page/Dashboard/Admin/Admin";
import Sidebar from "../Dashboard/Sidebar";
import Dashboard from "../../Page/Dashboard/Dashboard/Dashboard";


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
        path: "members",
        element: <Login></Login>
      },
      // {
      //   path: "projects",
      //   element: <Sidebar></Sidebar>
      // },
      
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "allusers",
        element: (
          <PrivateRoute>
            <Admin></Admin>
          </PrivateRoute>
        ),
      },
      {
        path: "signup",
        element: <PrivateRoute><SignUp></SignUp></PrivateRoute>,
      },
      {
        path: "dash",
        element: <Sidebar></Sidebar>
      },
     
      
    ],
  },
  
]);

export default router;
