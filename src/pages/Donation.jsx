import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, MenuItem, Select, InputLabel, FormControl, Typography } from '@mui/material';
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import axios from 'axios';

function Donation() {
  const [foodItems, setFoodItems] = useState([]);
  const [ngos, setNgos] = useState([]);
  const [selectedNgo, setSelectedNgo] = useState('');
  const [donatedFood, setDonatedFood] = useState(new Set());

  useEffect(() => {
    async function fetchData() {
      try {
        const user=JSON.parse(localStorage.getItem("user"));
        console.log("I am " + user._id);
        const foodRes = await axios.get(`http://localhost:5000/api/foodItems/${user._id}`);  
        const ngosRes = await axios.get('http://localhost:5000/getNgos');
        console.log(foodRes.data) 
        setFoodItems(foodRes.data);
        setNgos(ngosRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  // Handle donation click
  const handleDonate = async (id) => {
    if (!selectedNgo) {
      alert('Please select an NGO to donate to');
      return;
    }

    try {
      await axios.post('/api/donate', { id, donatedTo: selectedNgo });  // Replace with your actual donate API endpoint
      setDonatedFood((prevDonatedFood) => new Set(prevDonatedFood.add(id))); // Mark the food as donated
    } catch (error) {
      console.error('Error donating food:', error);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Food Donation
      </Typography>

      {/* NGO Selection Dropdown */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="ngo-select-label">Select NGO</InputLabel>
        <Select
          labelId="ngo-select-label"
          value={selectedNgo}
          label="Select NGO"
          onChange={(e) => setSelectedNgo(e.target.value)}
        >
          {ngos.map((ngo) => (
            <MenuItem key={ngo._id} value={ngo._id}>
              {ngo.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Food Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Food Name</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Donation Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foodItems.map((foodItem) => (
              <TableRow key={foodItem.id}>
                <TableCell>{foodItem.name}</TableCell>
                <TableCell>{new Date(foodItem.expiry).toLocaleDateString()}</TableCell>
                <TableCell>{foodItem.quantity}</TableCell>
                <TableCell>
                  {/* Donation Button */}
                  {!foodItem.isDonated ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleDonate(foodItem.id)}
                      disabled={donatedFood.has(foodItem.id)}
                    >
                      <FaPlusCircle style={{ marginRight: '0.5rem' }} />
                      Donate
                    </Button>
                  ) : (
                    <Button variant="contained" color="success" disabled>
                      <FaCheckCircle style={{ marginRight: '0.5rem' }} />
                      Donated
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Donation;
