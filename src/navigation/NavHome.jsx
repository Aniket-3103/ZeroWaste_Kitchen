import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import { LoginPage } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

function NavHome() {
  //if user is logged in
  const isAuth = false;

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default NavHome;
