import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import { useNavigate } from 'react-router-dom'
import './stuff.css'

export default function MyMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
    <IconButton edge="start" color="inherit" aria-label="Menu" sx={{ mr: 1 }} onClick={handleClick}>
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
        <MenuItem onClick={() => {navigate('/Lab1'); handleClose();}}>
          <div className="link">Лабораторная работа 1</div>
        </MenuItem>
        <MenuItem onClick={() => {navigate('/Lab2'); handleClose();}}>
          <div className="link">Лабораторная работа 2</div>
        </MenuItem>
        <MenuItem onClick={handleClose}>Лабораторная работа 3</MenuItem>
        <MenuItem onClick={() => {navigate('/Lab4'); handleClose();}}>
          <div className="link">Лабораторная работа 4</div>
        </MenuItem>
        <MenuItem onClick={() => {navigate('/Lab5'); handleClose();}}>
          <div className="link">Лабораторная работа 5</div>
        </MenuItem>
        <MenuItem onClick={() => {navigate('/Lab6'); handleClose();}}>
          <div className="link">Лабораторная работа 6</div>
        </MenuItem>
        <MenuItem onClick={handleClose}>Лабораторная работа 7</MenuItem>
      </Menu>
    </div>
  );
}