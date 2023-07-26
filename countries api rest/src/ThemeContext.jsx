// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [themeLight, setThemeLight] = useState(true);

    return (
        <ThemeContext.Provider value={{ themeLight, setThemeLight }}>
            {children}
        </ThemeContext.Provider>
    );
};
