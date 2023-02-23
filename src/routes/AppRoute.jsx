import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {  ErrorPage} from "../heroes";
import { LoginPage } from "../auth";
import { childrenHeroesRoutes } from "./HeroesRouter";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";


const routesConfig = createBrowserRouter([
  
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <HeroesRoutes />,
    children: childrenHeroesRoutes,
    errorElement: <ErrorPage />
  }
]);


export const AppRoute = () => {
  return <RouterProvider router={routesConfig} />
}
