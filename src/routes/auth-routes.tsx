import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/dashboard/views/dashboard"
import Customers from "../pages/customers/views/customers"
import Transactions from "@/pages/transactions/views/transactions"

 const AuthRoutes=()=>{
    return (
        <Routes>
            <Route path="/home" element={<Dashboard/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/customers/:id" element={<></>}/>
            <Route path="/transactions" element={<Transactions/>}/>
            
        </Routes>
    )
}
export const protectedRoutes=[
    {
        path:"/dashboard/*",
        element:<AuthRoutes/>
    }
]