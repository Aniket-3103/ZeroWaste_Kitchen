import React, { useState } from 'react';
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
          marginTop: '64px', // Account for any header/navbar
          width: 250,        // Set the width of the sidebar
          height: '100vh',   // Set the height to 100vh to make it full height
          borderRight: 'none', // Remove right border
          backgroundColor: '#D4EAC7', // Light green background (you can adjust the color)
          padding: 2,       
        },
      }}
      className="shadow-lg" // Add shadow to the sidebar for a better UI
    >
      <div className="h-full w-full p-4">
        {/* Profile Section */}
        <div className="flex items-center mb-6">
          <Avatar
            alt="Profile Picture"
            src="https://via.placeholder.com/150" // Replace with your image URL
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
