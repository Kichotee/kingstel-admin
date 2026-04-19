import { RouteObject, Navigate, useLocation, useRoutes } from "react-router-dom";
import { protectedRoutes } from "./auth-routes";
import Layout from "../layout/layout";
import Login from "@/pages/authentication/views/login";
import Auth from "@/lib/api/auth";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const token = Auth.getToken();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

const RedirectIfAuthenticated = ({ children }: { children: JSX.Element }) => {
  const token = Auth.getToken();

  if (token) {
    return <Navigate to="/dashboard/home" replace />;
  }

  return children;
};

export default function Router() {
  const commonRoutes = [
    {
      path: "/logon",
      element: (
        <RedirectIfAuthenticated>
          <Login />
        </RedirectIfAuthenticated>
      ),
    },
    {
      path: "/login",
      element: (
        <RedirectIfAuthenticated>
          <Login />
        </RedirectIfAuthenticated>
      ),
    
    },
    {
      path: "/",
      element: (
        <RedirectIfAuthenticated>
          <Login />
        </RedirectIfAuthenticated>
      ),
    
    },
  ];

  const element = useRoutes([
    ...commonRoutes,
    ...protectedRoutes.map((route: RouteObject) => {
      return {
        ...route,
        element: (
          <RequireAuth>
            <Layout>{route.element as JSX.Element}</Layout>
          </RequireAuth>
        ),
      };
    }),
  ]);
  return <>{element}</>;
};
