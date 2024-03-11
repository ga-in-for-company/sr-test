import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/Home.js";
import "./index.css";
import Login from "./pages/Login.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
