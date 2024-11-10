"use client";

import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import { MapPin, Calendar, Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardHeader,
  CardMedia,
  Badge,
  TextField,
} from "@mui/material";
import { FaSearch, FaLeaf } from "react-icons/fa"; // Corrected imports for icons
import pasta from "../assets/pasta.png";
import VideoSection from "../components/VideoSection";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import DonationPointMap from "../components/DonationPointMap";
import Footer from "../components/Footer";

// Dummy food items data
const foodItems = [
  {
    name: "Organic Vegetables",
    description: "Fresh, locally sourced organic vegetable mix",
    quantity: 20,
    expiryDate: "2023-07-15",
    location: "Andheri",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Whole Grain Bread",
    description: "Freshly baked whole grain bread loaves",
    quantity: 15,
    expiryDate: "2023-07-10",
    location: "Jogeshwari",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Mixed Fruit Basket",
    description: "Assortment of seasonal fruits",
    quantity: 25,
    expiryDate: "2023-07-12",
    location: "Malad",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Plant-based Protein Mix",
    description: "Assorted plant-based protein sources",
    quantity: 30,
    expiryDate: "2023-08-20",
    location: "Azad Nagar, Andheri",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Homemade Granola",
    description: "Crunchy granola with nuts and dried fruits",
    quantity: 40,
    expiryDate: "2023-09-01",
    location: "Seven Hills, Andheri",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Organic Eggs",
    description: "Farm-fresh organic eggs",
    quantity: 50,
    expiryDate: "2023-07-25",
    location: "Bandra",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function LandingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [requestedItems, setRequestedItems] = useState([]); // Keep this as an array of strings

  // Filter food items based on search term
  const filteredItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRequest = (itemName) => {
    // itemName is a string now, no TypeScript type annotation
    setRequestedItems((prev) => [...prev, itemName]);
  };

  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidmluaXRtb2RpIiwiYSI6ImNseHlnNjYwbTAwZTEya3IyNW96M2d0ZHgifQ.vm0AB_lRtReDu3PskCcMFg";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
  }, []);

  return (
    <>
      <VideoSection />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
        {/* Header Section */}
        <header className="text-center py-12 bg-white shadow-md">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" gutterBottom color="primary">
              Zero Waste Kitchen
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph>
              Reducing food waste, one meal at a time
            </Typography>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center items-center space-x-2 max-w-md mx-auto"
          ></motion.div>
        </header>

        {/* Main Content - Food Items */}
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: "1.3em",
                    padding: "1.5em",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardHeader
                    title={item.name}
                    subheader={item.description}
                    action={<FaLeaf className="h-5 w-5 text-green-500" />}
                    sx={{ paddingBottom: 0 }}
                  />
                  <CardMedia
                    component="img"
                    image={pasta}
                    alt={item.name}
                    height="200"
                    sx={{ borderRadius: "1em", marginBottom: "1em" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>

                    <div className="p-0 space-y-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 " />
                        <span className="text-sm line-clamp-1">
                          123 Garden Street, Green Valley, CA 94123{" "}
                        </span>
                      </div>
                      <div className="w-full h-[1px] bg-gray-300 "></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-emerald-600" />
                          <div>
                            <p className="text-sm font-medium">Quantity</p>
                            <p className="text-sm">20 available</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-emerald-600" />
                          <div>
                            <p className="text-sm font-medium">Best before</p>
                            <p className="text-sm">2023-07-15</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-gray-300 "></div>
                      <div className="flex gap-2">
                        
                      </div>
                    </div>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "center", paddingTop: 0 }}>
                  <a
  href="https://www.google.com/maps/place/19%C2%B007'15.5%22N+72%C2%B050'01.1%22E/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border-emerald-200 p-2 flex items-center justify-center"
>
  <MapPin className="w-4 h-4 mr-2" />
  View location on map
</a>
                  </CardActions>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div id="map-container" ref={mapContainerRef} />
        </main>

        <DonationPointMap />

        {/* Footer Section */}
        <Footer/>
      </div>
    </>
  );
}
