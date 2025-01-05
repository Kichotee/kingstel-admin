import { RouteObject, useRoutes } from "react-router-dom";
import { protectedRoutes } from "./auth-routes";
import Layout from "../layout/layout";

export default () => {
  const commonRoutes = [
    {
      path: "/login",
      element: <></>,
      path: "/",
      element: <>hi</>,
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
