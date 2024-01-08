import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home/Home/Home";
import Category from "./pages/Home/Category/Category";
import NewsLayout from "./layout/NewsLayout";
import News from "./pages/News/News/News";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : '/category/:id',
        element : <Category></Category>
      }
    ]
  },
  {
    path: 'news',
    element : <NewsLayout></NewsLayout>,
    children : [
      {
        path: ':id',
        element : <News></News>
      }
    ]
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
