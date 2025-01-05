import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/dashboard/views/dashboard"

 const AuthRoutes=()=>{
    return (
        <Routes>
            <Route path="/home" element={<Dashboard/>}/>
            <Route path="/customers" element={<></>}/>
            <Route path="/customers/:id" element={<></>}/>
            
        </Routes>
    )
}
export const protectedRoutes=[
    {
        path:"/dashboard/*",
        element:<AuthRoutes/>
    }
]