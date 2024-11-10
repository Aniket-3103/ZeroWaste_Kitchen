import React from "react";
import { motion } from "framer-motion";
import title_video from "../assets/title_video.mp4";
import { Button } from "@mui/material";

export default function VideoSection() {
  return (
    <div className="relative w-full h-[500px] mb-12">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={title_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to Zero Waste Kitchen
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Let's reduce food waste together
        </motion.p>

        {/* Slider Text */}
        <div className="w-full max-w-md">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="overflow-hidden text-center"
          >
            <motion.p
              animate={{ y: [0, -100, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="text-xl"
            >
              🌱 Fresh Organic Food Available
            </motion.p>
            <motion.p
              animate={{ y: [0, -100, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 2,
              }}
              className="text-xl"
            >
              🥖 Donate Surplus Food to Local Shelters
            </motion.p>
            <motion.p
              animate={{ y: [0, -100, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 4,
              }}
              className="text-xl"
            >
              🍎 Eat Healthy, Live Sustainably
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
