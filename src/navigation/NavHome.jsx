import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Recipe from "../pages/Recipe";
import LandingPage from "../pages/LandingPage";
import { LoginPage } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import Donation from "../pages/Donation";

function NavHome() {
  //if user is logged in
  const isAuth = false;

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/recipe" element={<Recipe/>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/donate" element={<Donation />} />
    </Routes>
  );
}

export default NavHome;
