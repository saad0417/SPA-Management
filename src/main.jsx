import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import store from "./store/store.js";
import React,{lazy} from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/HomePage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const DashboardPage = lazy(() => import("./pages/DashboardPage.jsx"));
// const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage.jsx"));
// const CartPage = lazy(() => import("./pages/CartPage.jsx"));
// const CheckoutPage = lazy(() => import("./pages/CheckoutPage.jsx"));
// const CategoryPage = lazy(() => import("./pages/CategoryPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);