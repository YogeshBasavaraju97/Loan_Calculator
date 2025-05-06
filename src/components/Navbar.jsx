import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Button, useTheme, useMediaQuery, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useColorMode } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Exchange Rates(LIVE)", path: "/exchange-rates" },
    { text: "About", path: "/about" },
    { text: "Error Page", path: "/error" }
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {navLinks.map((link) => (
                <Button key={link.text} sx={{
                  px: 2.5, py: .5,
                  backgroundColor: location.pathname === link.path ? '#3598f0' : 'transparent', // light blue background

                  borderRadius: 1,
                }} color="inherit" component={Link} to={link.path}>
                  {link.text}
                </Button>
              ))}
            </Box>
          )}
          <Switch checked={mode === "dark"} onChange={toggleColorMode} />
        </Toolbar>
      </AppBar >
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={link.text} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
