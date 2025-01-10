import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/views/dashboard";
import Customers from "../pages/customers/views/customers";
import Transactions from "@/pages/transactions/views/transactions";
import { CardRequests } from "@/pages/card-requests/views/card-requests";
import ManageCurrencies from "@/pages/manage-currency/views/manage-currencies";
import EditCurrency from "@/pages/manage-currency/views/edit-currency";
import ManageUsers from "@/pages/manage-users/views/manage-users";
import EditUser from "@/pages/manage-users/views/edit-user";
import ManageTransfers from "@/pages/manage-transfers/views/transfers";
import Compliance from "@/pages/compliance/views/compliance";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/:id" element={<></>} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/card-requests" element={<CardRequests />} />
      <Route path="/manage-currency" element={<ManageCurrencies />} />
      <Route path="/edit-currency/:id" element={<EditCurrency />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
      <Route path="/manage-transfers" element={<ManageTransfers />} />
      <Route path="/compliance" element={<Compliance />} />
      <Route path="/compliance/:id" element={<Compliance />} />
    </Routes>
  );
};
export const protectedRoutes = [
  {
    path: "/dashboard/*",
    element: <AuthRoutes />,
  },
];
