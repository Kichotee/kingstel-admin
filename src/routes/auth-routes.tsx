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
import CustomerDetails from "@/pages/customers/views/customer-details";
import EditCompliance from "@/pages/compliance/views/editCompliance";
import ManageCharges from "@/pages/security/views/manage-charges";
import ManageProfile from "@/pages/profile/views/manage-profile";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/:id" element={<CustomerDetails/>} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/card-requests" element={<CardRequests />} />
      <Route path="/currency/manage-currency" element={<ManageCurrencies />} />
      <Route path="/currency/edit-currency/:id" element={<EditCurrency />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
      <Route path="/transfers/manage-transfers" element={<ManageTransfers />} />
      <Route path="/compliance" element={<Compliance />} />
      <Route path="/compliance/:id" element={<EditCompliance />} />
      <Route path="/manage-charge" element={<ManageCharges />} />
      <Route path="/charge/:id" element={<EditCompliance />} />
      <Route path="/settings/profile" element={<ManageProfile />} />

    </Routes>
  );
};
export const protectedRoutes = [
  {
    path: "/dashboard/*",
    element: <AuthRoutes />,
  },
];
