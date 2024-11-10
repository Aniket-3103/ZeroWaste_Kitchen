import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { MapPin } from 'lucide-react';

const MAPBOX_TOKEN = 'your-mapbox-access-token'; // Add your Mapbox access token here

const DonationPointMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749, // Default to San Francisco
    longitude: -122.4194,
    width: '100%',
    height: '100%',
    zoom: 12,
  });
  const [userLocation, setUserLocation] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const [donationPoints, setDonationPoints] = useState([]); // Store all markers' locations

  // Function to generate random coordinates near the user's location
  const generateRandomCoordinates = (lat, lon) => {
    const randomLat = (Math.random() - 0.5) / 100;  // Generate a random value within 0.01 degrees
    const randomLon = (Math.random() - 0.5) / 100;  // Generate a random value within 0.01 degrees

    return {
      latitude: lat + randomLat,
      longitude: lon + randomLon,
    };
  };

  // Fetch the user's location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });

          // Generate 5 random donation points near the user's location
          const newDonationPoints = Array.from({ length: 5 }).map(() =>
            generateRandomCoordinates(latitude, longitude)
          );

          setDonationPoints(newDonationPoints);

          // Update the map viewport to center around the user's location
          setViewport((prevViewport) => ({
            ...prevViewport,
            latitude,
            longitude,
            zoom: 14, // Adjust zoom level as needed
          }));
        },
        (error) => {
          console.error("Error fetching location:", error);
          // Optionally, handle error and set a default location
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  // If the user's location is not available yet, you can show a loading state
  if (!userLocation) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      {/* Header Section */}
      <div style={{ margin: '30px 0', fontSize: '34px', fontWeight: '900', color: 'green' }}>
        Nearby Donation Points
      </div>

      {/* Map Container */}
      <div style={{ position: 'relative', width: '90%', height: '80%' }}> 
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          {/* Add the marker at the user's location */}
          <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
            <div
              style={{
                backgroundColor: 'red',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'transform 0.3s ease', // Add hover effect
              }}
              onClick={() => setShowPopup(true)} // Show popup when user marker is clicked
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} // Hover effect
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Hover effect
            >
              <span role="img" aria-label="donation-point">
                <MapPin />
              </span>
            </div>
          </Marker>

          {/* Render the additional donation points */}
          {donationPoints.map((point, index) => (
            <Marker
              key={index}
              latitude={point.latitude}
              longitude={point.longitude}
            >
              <div
                style={{
                  backgroundColor: 'green',
                  padding: '10px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease', // Add hover effect
                }}
                onClick={() => setShowPopup(true)} // Show popup when any marker is clicked
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} // Hover effect
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Hover effect
              >
                <span role="img" aria-label="donation-point">
                  <MapPin />
                </span>
              </div>
            </Marker>
          ))}

          {/* Popup component */}
          {showPopup && (
            <Popup
              latitude={userLocation.latitude}
              longitude={userLocation.longitude}
              onClose={() => setShowPopup(false)} // Close the popup when clicked
            >
              <h3>Donation Point</h3>
              <p>Drop off your donations here!</p>
            </Popup>
          )}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default DonationPointMap;
