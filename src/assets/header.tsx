import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyMenu from './labmenu'
import ThemeToggle from './themeToggle'

export default function Header() {
  return (
    <AppBar position="static">
  <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
    <MyMenu/>
    <Typography variant="h6" color="inherit" component="div">
      Header
    </Typography>
    <ThemeToggle/>
  </Toolbar>
</AppBar>
  );
}