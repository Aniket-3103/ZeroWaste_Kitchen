import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Button, MenuItem, Select, InputLabel, FormControl, Typography, Paper
} from '@mui/material';
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardMessage from '../components/dashboard/DashboardMessage';

function Donation() {
    const [foodItems, setFoodItems] = useState([]);
    const [ngos, setNgos] = useState([]);
    const [selectedNgo, setSelectedNgo] = useState('');
    const [donatedFood, setDonatedFood] = useState(new Set());

    useEffect(() => {
        async function fetchData() {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                console.log(user);
                const ngosRes = await axios.get('http://localhost:5000/api/auth/getNgos');
                setNgos(ngosRes.data);

                const foodRes = await axios.get(`http://localhost:5000/api/foodItems/${user._id}`);
                setFoodItems(foodRes.data.foodItems);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    console.log(foodItems);

    // Handle donation click
    const handleDonate = async (id) => {
        if (!selectedNgo) {
            alert('Please select an NGO to donate to');
            return;
        }

        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.put('http://localhost:5000/api/foodItems/donate', { uId: user._id, donatedTo: selectedNgo });
            if(response.data.status==="success"){
                alert("Thank you for your kindness!!!");
            }
            setDonatedFood((prevDonatedFood) => new Set(prevDonatedFood.add(id)));
        } catch (error) {
            console.error('Error donating food:', error);
        }
    };

    return (
        <div className="flex justify-start min-h-screen w-full">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="ml-[calc(2vh)] md:ml-[calc(250px+4vh)] grow flex flex-col mr-[2vh]">
                <Header />
                <div className=" my-[2vh] rounded-2xl w-full h-full">
                    <DashboardMessage />
                    <Paper elevation={3} className="p-4 mt-4">
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
                        <TableContainer component={Paper}>
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
                                    {foodItems.length > 0 ? (
                                        foodItems
                                            .filter((foodItem) => !foodItem.hasPutToDonate) // Filter items where hasPutToDonate is false
                                            .map((foodItem) => (
                                                <TableRow key={foodItem.id}>
                                                    <TableCell>{foodItem.name}</TableCell>
                                                    <TableCell>{new Date(foodItem.expiry).toLocaleDateString()}</TableCell>
                                                    <TableCell>{foodItem.quantity}</TableCell>
                                                    <TableCell>
                                                        {!foodItem.isDonated ? (
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                onClick={() => handleDonate(foodItem.id)}
                                                                disabled={donatedFood.has(foodItem.id)}
                                                            >
                                                                <FaPlusCircle style={{ marginRight: "0.5rem" }} />
                                                                Donate
                                                            </Button>
                                                        ) : (
                                                            <Button variant="contained" color="success" disabled>
                                                                <FaCheckCircle style={{ marginRight: "0.5rem" }} />
                                                                Donated
                                                            </Button>
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={4} align="center">
                                                No food items available for donation.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>

                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
            </div>
        </div>


    );
}

export default Donation;
