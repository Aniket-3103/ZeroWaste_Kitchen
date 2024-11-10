import React from "react";
import { Typography } from "@mui/material";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

function Footer() {
  // Updated GitHub URLs for each user
  const githubLinks = {
    aniket: "https://github.com/Aniket-3103",  // Updated URL for Aniket
    parthesh: "https://github.com/parthesh-tiwari",  // Updated URL for Parthesh
    shubham: "https://github.com/shubs-code",  // Updated URL for Shubham
  };

  return (
    <footer className="bg-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <Typography variant="body2" color="textSecondary">
          &copy; 2023 Zero Waste Kitchen. All rights reserved.
        </Typography>

        {/* Display the team members with clickable GitHub links */}
        <div className="mt-4">
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Developed by:
          </Typography>

          <div className="flex justify-center space-x-6">
            <div 
              style={{ cursor: "pointer" }} 
              onClick={() => window.open(githubLinks.aniket, "_blank")}
            >
              <Typography variant="body2">Aniket Mishra</Typography>
              <FaGithub size={20} />
            </div>

            <div 
              style={{ cursor: "pointer" }} 
              onClick={() => window.open(githubLinks.parthesh, "_blank")}
            >
              <Typography variant="body2">Parthesh Tiwari</Typography>
              <FaGithub size={20} />
            </div>

            <div 
              style={{ cursor: "pointer" }} 
              onClick={() => window.open(githubLinks.shubham, "_blank")}
            >
              <Typography variant="body2">Shubham Singh</Typography>
              <FaGithub size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
