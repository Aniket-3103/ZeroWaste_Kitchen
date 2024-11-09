import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard"

function NavHome(){
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard/>} />
        </Routes>
    )
}

export default NavHome;