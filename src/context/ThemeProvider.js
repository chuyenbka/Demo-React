import React, { createContext } from 'react';

export const ThemeContext = createContext({
	theme: 'dark',
	toggleTheme: () => { },
});

const ThemeProvider = ({ children, ...rest }) => {
	return (
		<ThemeContext.Provider value={rest.value}> {children} </ThemeContext.Provider>
	)
}

export default ThemeProvider;
