import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Plus } from "lucide-react";
export default function AddFood() {
  const [open, setOpen] = React.useState(false);
  console.log();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    
    const user = JSON.parse(localStorage.getItem('user')); // Get user object from local storage
    const userId = user ? user._id : null; // Extract user ID from the user object
    console.log(user);
    // Prepare the data to send
    const dataToSend = {
      foodItemName: formJson.name,
      quantity: Number(formJson.quantity),
      expiry: new Date(formJson.expiry),
      owner: userId, // Replace with actual owner value
      description: "description", // Replace with actual description value
      imageUrl:formJson.image||"",
    };

    try {
      const response = await fetch('http://localhost:5000/api/foodItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful response
      console.log('Food item added successfully');
      handleClose();
    } catch (error) {
      console.error('Error adding food item:', error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
      <Plus className="h-6 w-6 mr-2"/> Add Food
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Add Food Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The added food items will be visible in the available food section.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Food Name"
            type="text"
            fullWidth
            variant="standard"
          />

        <TextField
            required
            margin="dense"
            id="quantity"
            name="quantity"
            label="Food Quantity"
            type="number"
            fullWidth
            variant="standard"
          />

        <TextField
            required
            margin="dense"
            id="image"
            name="image"
            label="Image Url"
            type="text"
            fullWidth
            variant="standard"
          />

        <div className='h-6'></div>

        <span className='mt-4 mb-2'>Entery Expiry Date:</span>
        <TextField
            required
            margin="dense"
            id="expiry"
            name="expiry"
            label=""
            type="date"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
