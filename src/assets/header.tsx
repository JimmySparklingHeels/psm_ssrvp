import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyMenu from './labmenu'
import ThemeToggle from './themeToggle'
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import './stuff.css'

export default function Header() {
  const navigate = useNavigate();

  const handleClickMain = () => {
    navigate('/');
  };

  const handleClickAbout = () => {
    navigate('/about');
  };
  return (
    <AppBar position="static">
  <Toolbar variant="dense">
    <MyMenu/>
    <Button variant='text' onClick={handleClickMain} style={{color: '#FFF', fontSize:'16px', width:'fit-content', whiteSpace:'nowrap', marginLeft:'5px'}}>Главная</Button>
    <Button variant='text' onClick={handleClickAbout} style={{ color: '#FFF', fontSize:'16px', width:'fit-content', whiteSpace:'nowrap', marginLeft:'5px'}}>О себе</Button>
    <Typography variant="h6" color="inherit" component="div" style={{textAlign:'center', width:'100%'}}>
      Современные средства разработки Web-приложений
    </Typography>
    <div style={{width:'10%'}}></div>
    <div style={{marginLeft:"auto"}}>
      <ThemeToggle/>
    </div>
  </Toolbar>
</AppBar>
  );
}