import { FaBars, FaCog, FaUserCircle } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import Technovate_logo from "../../src/assets/Technovate_logo.png";
import { Button } from "@mui/material"; // Optionally you can use Material UI's Button for better design

export default function Navbar({ toggleDrawer }) {
  const user = localStorage.getItem("user");
  const isAuth = user != null;

  return (
    <nav className="bg-gray-100 mt-[2vh]  min-h-20 rounded-xl shadow-md w-full px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <Button
          variant="text"
          className="text-gray-600"
          onClick={() => console.log("Go to Recipe's Dashboard")}
        >
          Recipe's
        </Button>

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

      <div className="flex items-center space-x-5">
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Logout action")}
        >
          <FaUserCircle className="text-white-600 cursor-pointer text-xl" />
          &nbsp; &nbsp; Logout
        </Button>
      </div>
    </nav>
  );
}
