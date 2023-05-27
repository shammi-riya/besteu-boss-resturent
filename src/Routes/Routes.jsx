// import React from 'react';
import {
    createBrowserRouter,
   
  } from "react-router-dom";
 
import Home from "../Pages/Home/Home/Home";
import App from "../App";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Regester from "../Pages/Login/Regester";
import DashBord from "../Pages/DashBord/DashBord/DashBord";
import PrivetRoute from "./PrivetRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/menu",
          element: <Menu></Menu>,
        },
        {
          path: "/order/:catogory",
          element: <Order></Order>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/sighinUp",
          element:<Regester></Regester>
        },
        {
          path: "/dashBord",
          element:<PrivetRoute><DashBord></DashBord></PrivetRoute>
        },
      ],
  },
]);


export default router;