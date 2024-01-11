import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home/Home/Home";
import Category from "./pages/Home/Category/Category";
import NewsLayout from "./layout/NewsLayout";
import News from "./pages/News/News/News";
import AuthProvider from "./Provider/AuthProvider";
import LoginLayout from "./layout/LoginLayout";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/LogIn/Register/Register";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element : <LoginLayout></LoginLayout>,
    children : [
      {
        path: "/",
        element : <Navigate to="/category/0"></Navigate>
      },
      {
        path : "login",
        element: <LogIn></LogIn>
      },
      {
        path : "register",
        element : <Register></Register>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children : [
      {
        path : ':id',
        element : <Category></Category>,
        loader : ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: 'news',
    element : <NewsLayout></NewsLayout>,
    children : [
      {
        path: ':id',
        element : <PrivateRoute><News></News></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
