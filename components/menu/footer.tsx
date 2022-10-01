import { Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: "#000000",
          color: "white",
          fontSize: 12,
          paddingTop: 1,
          textAlign: "center",
        }}
      >
        &copy; 2022
      </Box>
    </React.Fragment>
  );
}
