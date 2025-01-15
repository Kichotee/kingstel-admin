import { RouteObject, useRoutes } from "react-router-dom";
import { protectedRoutes } from "./auth-routes";
import Layout from "../layout/layout";
import Login from "@/pages/authentication/views/login";

export default function Router() {
  const commonRoutes = [
    {
      path: "/login",
      element:<Login/>,
    
    },
    {
      path: "/",
      element:<Login/>,
    
    },
  ];

  const element = useRoutes([
    ...commonRoutes,
    ...protectedRoutes.map((route: RouteObject) => {
      return {
        ...route,
        element: <Layout>{route.element}</Layout>,
      };
    }),
  ]);
  return <>{element}</>;
};
