import * as React from 'react';

import { Button, Menu, Select, MenuItem, Typography, Box, LinearProgress } from "@mui/material";
import AddFood from "../food/AddFood";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function DashboardFoodItems() {
  const problems= [
    {
      id: 45,
      title: "Jump Game II",
      completion: 40.8,
      difficulty: "Medium",
      isLocked: true,
    },
    {
      id: 46,
      title: "Permutations",
      completion: 79.5,
      difficulty: "Medium",
      isLocked: true,
    },
    {
      id: 47,
      title: "Permutations II",
      completion: 60.4,
      difficulty: "Medium",
      isLocked: true,
    },
    {
      id: 48,
      title: "Rotate Image",
      completion: 76.3,
      difficulty: "Medium",
      isLocked: true,
    },
    {
      id: 49,
      title: "Group Anagrams",
      completion: 69.7,
      difficulty: "Medium",
      isLocked: true,
    },
    {
      id: 50,
      title: "Pow(x, n)",
      completion: 35.9,
      difficulty: "Medium",
      isLocked: true,
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="mt-[4vh] ]">
      <Box className="mx-auto space-y-6">
        <Box display="flex" justifyContent="space-between" alignItems="center">

        <div className="md:hidden">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            variant='contained'
            size='large'
            className=' '
          >
            <BsThreeDotsVertical className='w-4 h-4'/>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Available</MenuItem>
            <MenuItem onClick={handleClose}>Donated</MenuItem>
            <MenuItem onClick={handleClose}>Expired</MenuItem>
            <MenuItem onClick={handleClose}>consumed</MenuItem>
          </Menu>
        </div>
          <div className="hidden md:block ">
            <Box display="flex" gap={1}>
              <Button variant="contained" size="small" className="w-24 h-10">
                Available
              </Button>
              <Button variant="outlined" size="small" className="w-24 h-10">
                Donated
              </Button>
              <Button variant="outlined" size="small" className="w-24 h-10">
                Expired
              </Button>
              <Button variant="outlined" size="small" className="w-24 h-10">
                Consumed
              </Button>
            </Box>
          </div>
          <Box>
            <AddFood/>
          </Box>
        </Box>

        <Box className="space-y-2">
          {problems.map((problem) => (
            <Box
              key={problem.id}
              display="grid"
              gridTemplateColumns="auto 1fr auto  "
              gap={2}
              alignItems="center"
              bgcolor={false?"#dcfce7":false?"#FFF3CF":"#F8D8DB"}
              opacity={0.1}
              p={2}
              borderRadius="8px"
              className=" hover:bg-opacity-20 transition-colors"
            >
              <div></div>
              <Typography variant="h6">{problem.title}</Typography>
              
              <Box display="flex" alignItems="center" gap={2}>
                <Typography variant="h6"> {problem.completion} Days</Typography>
                <Typography variant="h6"> {4} Quantity</Typography>
              </Box>
              
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
} 