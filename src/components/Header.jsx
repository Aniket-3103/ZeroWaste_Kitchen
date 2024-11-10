import { FaBars, FaCog, FaUserCircle } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


import { AiFillAppstore } from "react-icons/ai";
import Technovate_logo from "../../src/assets/Technovate_logo.png";
import { Button } from "@mui/material"; // Optionally you can use Material UI's Button for better design
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleDrawer }) {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const isAuth = user != null;

  return (
    <nav className="bg-gray-100 mt-[2vh]  min-h-20 rounded-xl shadow-md w-full px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-0 md:space-x-8">
        <Button
          variant="text"
          className="text-gray-600 p-2 !min-w-6"
          onClick={() => {}}
        >
          <GiHamburgerMenu className="md:hidden w-6 h-6"/>
        </Button>

        <Button
          variant="text"
          className="text-gray-600 !min-w-8"
          onClick={() => navigate("/dashboard")}
        >
          <span className="hidden md:block">Dashboard</span> <MdOutlineSpaceDashboard className="md:hidden w-6 h-6"/>
        </Button>
        <Button
          variant="text"
          className="text-gray-600"
          onClick={() => navigate("/recipe")}
        >
          <span className="hidden md:block">Recipe's</span> <IoFastFoodOutline className="md:hidden w-6 h-6"/>
        </Button>
        <Button
          variant="text"
          className="text-gray-600"
          onClick={() => console.log("Go to Donate")}
        >
          <span className="hidden md:block">Donate</span> <BiDonateHeart className="md:hidden w-6 h-6"/>
        </Button>


      </div>

      <div className="flex items-center space-x-5">
        <Button
          variant="contained"
          color="primary"
          className=""
          onClick={() => console.log("Logout action")}
        >
          <FaUserCircle className="text-white-600 cursor-pointer text-xl hidden md:block mr-2" />
          Logout
        </Button>
      </div>
    </nav>
  );
}
