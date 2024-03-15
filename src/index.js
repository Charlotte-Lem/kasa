import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    loader: Accueil,
  },
  {
    path: "/APropos",
    element: <APropos />,
    loader: APropos,
  },
]);
//add errorElement
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
