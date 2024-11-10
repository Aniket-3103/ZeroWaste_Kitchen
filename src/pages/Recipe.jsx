import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import TypeIt from 'typeit-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Recipe = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [recipeSuggestion, setRecipeSuggestion] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    axios.get('http://localhost:5000/api/foodItems')
      .then((response) => {
        const items = Array.isArray(response.data) ? response.data : response.data.foodItems || [];
        setFoodItems(items);
      })
      .catch((err) => console.error('Error fetching food items:', err));
  }, []);

  const suggestRecipe = async () => {
    setLoading(true); // Set loading to true
    try {
      const response = await axios.post('http://localhost:5000/api/recipe', { foodItems });
      setRecipeSuggestion(response.data.recipe);
    } catch (error) {
      console.error('Error suggesting recipe:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const renderFoodItem = (item) => {
    const isYellow = new Date(item.expiry) < new Date(Date.now() + 5 * 24 * 60 * 60 * 1000); // Expiring soon threshold
    return (
      <Alert
        key={item.id}
        severity={isYellow ? 'warning' : 'success'}
        sx={{ mb: 2 }}
      >
        <Typography variant="h6" component="div">{item.name}</Typography>
        <Typography variant="body2">Quantity: {item.quantity}</Typography>
        <Typography variant="body2">
          Expiry: {new Date(item.expiry).toLocaleDateString()}
        </Typography>
      </Alert>
    );
  };

  return (
    <div className="flex justify-start h-screen w-full">
      <div className="hidden md:block"><Sidebar /></div>
      <div className="md:ml-[calc(250px+4vh)] ml-[2vh] grow flex flex-col mr-[2vh]">
        <Header />
        <div className="my-[2vh] rounded-2xl w-full h-full">
          <Box mb={3} display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h4">
              <TypeIt options={{ speed: 50 }}>Your Food Inventory</TypeIt>
            </Typography>

            <div className='hidden md:block'>
              <Button variant="contained" color="primary" onClick={suggestRecipe}>
                Suggest Recipe
              </Button>
            </div>
          </Box>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Food Items Card */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Food Items:</Typography>
                {Array.isArray(foodItems) && foodItems.map((item) => renderFoodItem(item))}
              </CardContent>
            </Card>

            {/* Recipe Suggestion Card */}
            <div className='md:hidden'>
              <Button variant="contained" color="primary" onClick={suggestRecipe}>
                Suggest Recipe
              </Button>
            </div>

            <Card>
              <CardContent>
                <Typography variant="h6">Suggested Recipe:</Typography>
                {loading ? ( // Show loader while loading
                  <Box display="flex" justifyContent="center" mt={2}>
                    <CircularProgress />
                  </Box>
                ) : recipeSuggestion ? (
                  <Typography variant="body1" style={{ marginTop: '1rem' }}>
                    <TypeIt options={{ speed: 10 }}>
                      {recipeSuggestion}
                    </TypeIt>
                  </Typography>
                ) : (
                  <Typography variant="body2" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                    Click the button to get a recipe suggestion!
                  </Typography>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
