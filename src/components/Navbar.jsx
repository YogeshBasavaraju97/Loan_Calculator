import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem,
  ListItemText, Box, Button, useTheme, useMediaQuery, Switch
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useColorMode } from "../context/ThemeContext";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navLinks = ["Home", "Exchange Rates(LIVE)", "About", "error page"];

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
            <Box sx={{ display: 'flex', gap: 5, m: 1 }}>
              {navLinks.map((text) => (
                <Button key={text} sx={{ p: 1 }} color="inherit" >{text}</Button>
              ))}
            </Box>
          )}
          <Switch checked={mode === "dark"} onChange={toggleColorMode} />
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {navLinks.map((text, index) => (
              <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
