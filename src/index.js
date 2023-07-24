import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./components/Home";
import Result from "./components/Result";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/result/:id", element: <Result /> },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
