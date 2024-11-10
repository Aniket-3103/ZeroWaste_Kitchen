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
} from "@mui/material";
import { FaLeaf } from "react-icons/fa";
import pasta from "../assets/pasta.png";
import VideoSection from "../components/VideoSection";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import DonationPointMap from "../components/DonationPointMap";
import Footer from "../components/Footer";
import useFoodItems from "../hooks/useFoodItems";
import { useNavigate } from "react-router-dom"; // Use this for navigation

export default function LandingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [requestedItems, setRequestedItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const { fetchFoodItems } = useFoodItems();
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const navigate = useNavigate(); // For navigation

  const filteredItems =
    foodItems && foodItems.length > 0
      ? foodItems.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  const getFoodItems = async () => {
    setLoading(true);
    let foodItemsFetched = await fetchFoodItems();
    setFoodItems(foodItemsFetched || []);
    setLoading(false);
  };

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidmluaXRtb2RpIiwiYSI6ImNseHlnNjYwbTAwZTEya3IyNW96M2d0ZHgifQ.vm0AB_lRtReDu3PskCcMFg";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
    getFoodItems();
  }, []);

  return (
    <>
      <VideoSection />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
        {/* Header Section */}

        <div className="fixed top-2 right-2 z-20">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        <header className="relative text-center py-12 bg-white shadow-md">
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

          {/* Login Button */}
          
        </header>

        {/* Main Content - Food Items */}
        <main className="container mx-auto px-4 py-8">
          {/* Food Item Cards */}
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
                    image={item?.imageUrl || pasta}
                    alt={item.name}
                    height="200"
                    className="aspect-square"
                    sx={{ borderRadius: "1em", marginBottom: "1em" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <div className="p-0 space-y-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 " />
                        <span className="text-sm line-clamp-1">
                          123 Garden Street, Green Valley, CA 94123
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
        <Footer />
      </div>
    </>
  );
}
