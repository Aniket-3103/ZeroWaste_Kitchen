import React, { useState } from 'react';
import Technovate_logo from "../../src/assets/Technovate_logo.png"
import { Drawer, Avatar, Button, Typography, Divider } from '@mui/material';
import { FaSignOutAlt } from 'react-icons/fa';  // Import react-icons

export default function Sidebar() {
  return (
      <Drawer
      anchor="left"
      open={true}
      variant="persistent"
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          marginTop: '2vh', // Account for any header/navbar
          marginLeft: '2vh', // Account for any header/navbar
          width: 250,    // Set the width of the sidebar
          height: '96vh',   // Set the height to 100vh to make it full height
          borderRight: 'none', // Remove right border
          background: 'linear-gradient(to bottom, #D4EAC7, #E8F5E9)', // Gradient from green to white
          padding: 2,
          borderRadius:6,
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Lighter shadow at the bottom
        },
      }}
      className="shadow-lg" // Add shadow to the sidebar for a better UI
    >
      <div className=" h-full w-full p-4">
        {/* Profile Section */}
        <div className="flex items-center justify-around mb-6">
          <Avatar
            alt="Profile Picture"
            src={Technovate_logo} // Replace with your image URL
            sx={{ width: 150, height: 150 }}
          />
        </div>

        <div className="items-center mb-6 flex">
        <div className="ml-4">
            <Typography variant="h6">User ka name</Typography>
            <Typography variant="body2" color="textSecondary">
              New York, USA
            </Typography>
          </div>
        </div>

        <Divider sx={{ marginBottom: 2 }} />

        {/* Update Button */}
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={() => console.log('Logout action')}
        >
          Update location
        </Button>
      </div>
    </Drawer>
    
  );
}
