import { Typography } from "@mui/material";
import React from "react";

const Copyright = () => {
  return (
    <footer className="copyright">
      <ul>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Contact Us</li>
      </ul>

      <Typography className="text">
        Copyright © 2022 All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Copyright;
