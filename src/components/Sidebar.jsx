import React, { useState } from 'react';
import Technovate_logo from "../../src/assets/Technovate_logo.png"
import { Drawer, Avatar, Button, Typography, Divider, Paper } from '@mui/material';
import { FaSignOutAlt } from 'react-icons/fa';  // Import react-icons
import { Award, Edit2, MapPin, Sprout, Trash2, TreeDeciduous } from "lucide-react"
import Bronze from "../assets/bronze.png";
import Silver from "../assets/silver.png";
import Gold from "../assets/gold.png";
const achievements = [
  {
    id: 1,
    img:Bronze,
    name: "Bronze",
    description: "+10 donations",
  },
  {
    id: 2,
    img:Silver,
    name: "Silver",
    description: "+20 donations",
  },
  {
    id: 3,
    img:Gold,
    name: "Gold",
    description: "+50 donations",
  },
]

export default function Sidebar({isOpen}) {
  return (
      <Drawer
      anchor="left"
      open={isOpen??true}
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
            <Typography variant="h6" className="text-center">User Name</Typography>
            <MapPin className="h-4 w-4 text-gray-500 inline-block mr-2" />
              <Typography variant="body2" color="textSecondary" className="inline-block">New York, USA</Typography>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="w-full">
          <Typography variant="h6" className="mb-4">Badges</Typography>
          <div className="space-y-3 mt-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} elevation={1} className="flex bg-white items-center space-x-3 rounded-xl p-3">
                <div className="rounded-full bg-green-100">
                  {/* {achievement.icon} */}
                  <img src={achievement.img} className="h-8 w-8"></img>
                </div>
                <div className="flex-1">
                  <Typography variant="body1" className="font-medium">{achievement.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {achievement.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Drawer>
    
  );
}
