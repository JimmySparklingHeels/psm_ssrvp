import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import { Link } from 'react-router-dom'
import './stuff.css'

export default function MyMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <IconButton edge="start" color="inherit" aria-label="Menu" sx={{ mr: 2 }} onClick={handleClick}>
      <FolderIcon />
    </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" className="link">Главная</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/lab1" className="link">Лабораторная работа 1</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/lab2" className="link">Лабораторная работа 2</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Лабораторная работа 3</MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/lab4" className="link">Лабораторная работа 4</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}