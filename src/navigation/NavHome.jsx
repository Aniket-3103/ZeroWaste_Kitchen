import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";

function NavHome() {
  //if user is logged in
  const isAuth = false;

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default NavHome;
