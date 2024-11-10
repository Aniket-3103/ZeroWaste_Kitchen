import * as React from "react";

import { Button, Menu, Select, MenuItem, Typography, Box } from "@mui/material";
import AddFood from "../food/AddFood";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function DashboardFoodItems({ fetchedFoodItems, addItem }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isExpired = (isoString) => {
    const currentDate = new Date();
    const targetDate = new Date(isoString);
    return targetDate < currentDate;
  };

  const isAboutToExpireIn5Days = (isoString) => {
    const currentDate = new Date();
    const targetDate = new Date(isoString);

    const fiveDaysLater = new Date(currentDate);
    fiveDaysLater.setDate(currentDate.getDate() + 5);

    return targetDate <= fiveDaysLater && targetDate > currentDate;
  };

  const formatToDDMMYYYY = (isoString) => {
    const date = new Date(isoString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <Box className="mt-[4vh] ]">
      <Box className="mx-auto space-y-6">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <div className="md:hidden">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="contained"
              size="large"
              className=" "
            >
              <BsThreeDotsVertical className="w-4 h-4" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
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
            <AddFood addFood={addItem}/>
          </Box>
        </Box>

        <Box className="space-y-2">
          {fetchedFoodItems &&
            fetchedFoodItems.map((fetchedFoodItem) => (
              <Box
                key={fetchedFoodItem.id}
                display="grid"
                gridTemplateColumns="auto 1fr auto  "
                gap={2}
                alignItems="center"
                bgcolor={
                  isExpired(fetchedFoodItem.expiry)
                    ? "#F8D8DB"
                    : isAboutToExpireIn5Days(fetchedFoodItem.expiry)
                    ? "#FFF3CF"
                    : "#dcfce7"
                }
                opacity={0.1}
                p={2}
                borderRadius="8px"
                className=" hover:bg-opacity-20 transition-colors"
              >
                <div></div>
                <Typography variant="h6">{fetchedFoodItem.name}</Typography>

                <Box display="flex" alignItems="center" gap={2}>
                  <Typography variant="h6">
                    Expiry Date: {formatToDDMMYYYY(fetchedFoodItem.expiry)}
                  </Typography>
                  <Typography variant="h6">
                    Qty: {fetchedFoodItem.quantity}
                  </Typography>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
