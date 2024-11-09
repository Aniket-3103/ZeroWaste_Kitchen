import { AppBar, Box, InputBase, Toolbar } from "@mui/material";
import {
  Menu as MenuIcon,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";

export default function Header({ toggleDrawer }) {
  return (
    <AppBar position="static" className="bg-gray-100 shadow-none">
      <Toolbar className="flex justify-between items-center">
        {/* Left Section: Menu Icon and Logo */}
        <div className="flex items-center">
          <MenuIcon className="text-gray-600 cursor-pointer" onClick={toggleDrawer} />
          <img
            src="images/gmailLogo.png"
            alt="logo"
            className="ml-4 w-28"
          />
        </div>

        {/* Middle Section: Search Bar */}
        <Box
          className="flex items-center bg-blue-100 rounded-lg px-4 ml-16 w-[690px] max-w-[720px] h-12"
        >
          <Search className="text-gray-600" />
          <InputBase
            placeholder="Search mail"
            className="flex-grow px-2 text-sm"
          />
          <Tune className="text-gray-600" />
        </Box>

        {/* Right Section: Option Icons */}
        <Box className="flex items-center space-x-5">
          <HelpOutlineOutlined className="text-gray-600 cursor-pointer" />
          <SettingsOutlined className="text-gray-600 cursor-pointer" />
          <AppsOutlined className="text-gray-600 cursor-pointer" />
          <AccountCircleOutlined className="text-gray-600 cursor-pointer" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
