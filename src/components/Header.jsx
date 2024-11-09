import { FaBars, FaCog, FaUserCircle } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import Technovate_logo from "../../src/assets/Technovate_logo.png"
import { Button } from "@mui/material"; // Optionally you can use Material UI's Button for better design

export default function Navbar({ toggleDrawer }) {
  return (
    <nav className="bg-gray-100 shadow-md w-full px-4 py-2 flex items-center justify-between">
      {/* Left Section: Menu Icon and Logo */}
      <div className="flex items-center space-x-4">
        {/* Menu Button */}
        <img
          src={Technovate_logo}
          alt="logo"
          className="w-20 h-20"
        />

        <Button
          variant="text"
          className="text-gray-600"
          onClick={() => console.log("Go to ZeroWaste Kitchen")}
        >
          ZeroWaste Kitchen
        </Button>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="flex items-center space-x-8">


        {/* Recipe's Dashboard Link */}
        <Button
          variant="text"
          className="text-gray-600"
          onClick={() => console.log("Go to Recipe's Dashboard")}
        >
          Recipe's
        </Button>

        {/* Donate Link */}
        <Button
          variant="text"
          className="text-gray-600"
          onClick={() => console.log("Go to Donate")}
        >
          Donate
        </Button>

        <Button
          variant="text"
          className="text-gray-600"
          onClick={() => console.log("Go to Donate")}
        >
          Dashboard
        </Button>


      </div>

      {/* Right Section: Settings & User */}
      <div className="flex items-center space-x-5">
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Logout action")}
        >
          <FaUserCircle className="text-white-600 cursor-pointer text-xl" />&nbsp; &nbsp;
          Logout
        </Button>
      </div>
    </nav>
  );
}
