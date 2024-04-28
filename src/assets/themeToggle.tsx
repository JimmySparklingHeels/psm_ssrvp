import * as React from 'react'
import IconButton from '@mui/material/IconButton';
import ContrastIcon from '@mui/icons-material/Contrast';
import {ThemeContext} from './theme'
import './stuff.css'

function ThemeButton() {
	const {isDark, toggleIsDark} = React.useContext(ThemeContext);
	function handleClick(){
		toggleIsDark();
	}
	return (
		<div>
			<IconButton color="inherit" aria-label="Toggle Theme" sx={{ mr: -2 }} onClick={handleClick}>
      			<ContrastIcon />
    		</IconButton>
    	</div>
	);
}

export default ThemeButton