import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";
import Search from "./pages/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children :[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/categories/:category',
        element:<CategoryPage></CategoryPage>
      },
      {
        path:'/search',
        element:<Search></Search>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
