import React from "react";
import { Typography } from "@mui/material";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const githubLinks = {
    aniket: "https://github.com/Aniket-3103",
    parthesh: "https://github.com/parthesh-tiwari",
    shubham: "https://github.com/shubs-code",
  };

  return (
    <footer className="bg-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <Typography variant="body2" color="textSecondary">
          &copy; 2023 Zero Waste Kitchen. All rights reserved.
        </Typography>

        <div className="mt-4">
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Developed by:
          </Typography>

          <div className="flex justify-center space-x-8 mt-4">
            {/* Member: Aniket */}
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.open(githubLinks.aniket, "_blank")}
            >
              <Typography variant="body2">Aniket Mishra</Typography>
              <FaGithub size={20} className="mt-1" />
            </div>

            {/* Member: Parthesh */}
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.open(githubLinks.parthesh, "_blank")}
            >
              <Typography variant="body2">Parthesh Tiwari</Typography>
              <FaGithub size={20} className="mt-1" />
            </div>

            {/* Member: Shubham */}
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.open(githubLinks.shubham, "_blank")}
            >
              <Typography variant="body2">Shubham Singh</Typography>
              <FaGithub size={20} className="mt-1" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
