import * as React from 'react'

const ThemeContext = React.createContext('light');

function ThemeProvider({children}) {
	const [isDark, setIsDark] = React.useState(false);

	React.useEffect(() => {
		const tstate = localStorage.getItem('themestate');
		if (tstate === 'dark') 
		{
	      	setIsDark(true);
	    }
	    else
	    {
	    	setIsDark(false);
	    }
	}, []);
	const toggleIsDark = () => {
		const newTheme = isDark === false ? 'dark' : 'light';
		localStorage.setItem('themestate', newTheme);
		setIsDark(!isDark);
		
	};

	document.body.style.color = (isDark === true ? "#FFFFFF" : "#000000");
	document.body.style.backgroundColor = (isDark === true ? "#000000" : "#FFFFFF");

	return (
		<ThemeContext.Provider value={{isDark, toggleIsDark}}>
			{children}
		</ThemeContext.Provider>
	)
}

{/*
function useContext() {
	const [isDark, setIsDark] = React.useState(false);

	React.useEffect(() => {

		const tstate = localStorage.getItem('themestate');
		if (tstate) {
      		isDark = tstate;
    	}

	    if (isDark) {
	      document.theme.classList.add("dark");
	      localStorage.setItem('themestate', true);
	    } else {
	      document.theme.classList.remove("dark");
	      localStorage.setItem('themestate', false);
	    }
  }, [isDark]);
	return(isDark, setIsDark);
}

function toggleTheme() {
  const context = React.useContext(ThemeContext)
  
  if (context === 'light') {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
*/}
export {ThemeContext, ThemeProvider}