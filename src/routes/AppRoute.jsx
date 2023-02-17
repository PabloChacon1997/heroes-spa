import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { HeroesApp } from "../HeroesApp";

import { DcPage, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";


export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <HeroesApp />,
    children: [

      {
        path: "/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/dc",
        element: <DcPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <Navigate to={"/marvel"} />,
      },
    ]
  
},
]);


export const AppRoute = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
