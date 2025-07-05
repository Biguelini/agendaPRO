import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

export const ThemeContext = createContext();  // <-- exportar aqui

export const ThemeProvider = ({ children }) => {
	const colorScheme = useColorScheme();
	const [isDark, setIsDark] = useState(colorScheme === 'dark');

	const toggleTheme = () => {
		setIsDark(prev => !prev)
		console.log(`Theme changed to ${isDark ? 'light' : 'dark'}`);
	};

	useEffect(() => {
		setIsDark(colorScheme === 'dark');
	}, [colorScheme]);

	const theme = isDark ? darkTheme : lightTheme;

	return (
		<ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme must be used within ThemeProvider');
	return context;
};
