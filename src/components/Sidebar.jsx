import { Drawer } from "@mui/material";
// import SideBarContent from "./SideBarContent";

export default function Sidebar() {
  return (
    <Drawer
      anchor="left"
      hideBackdrop={true}
      open={true}
      variant="persistent"
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          borderRight: "none",
          height: "calc(100vh - 64px)",
        },
      }}
      className="bg-gray-100 shadow-lg" 
    >
      <div className="h-full w-full p-4">
        {/* <SideBarContent /> */}
        <h3>df</h3>
        <h3>df</h3>
      </div>
    </Drawer>
  );
}
