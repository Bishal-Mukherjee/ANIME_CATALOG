import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "black", height: "4rem" }}
      >
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ fontFamily: "Zen Kurenaido" }}
          >
            AnimeCatalog
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
