import React from 'react';
import moon from '/icon-moon.svg';
import sun from '/icon-sun.svg';
import './header.css';
import { useTheme } from '../ThemeContext';

const Header = () => {
    const { themeLight, setThemeLight } = useTheme();
    const switchThemeIcon = themeLight ? moon : sun;

    const changeTheme = () => {
        setThemeLight((prevTheme) => !prevTheme);
    };

    return (
        <header className={`header ${themeLight ? "light" : "dark"}`}>
            <h3>Where in the World</h3>
            <div className='theme-div'>
                <span className="btn img" onClick={changeTheme}>
                    <img src={switchThemeIcon} alt="Theme Icon" />
                </span>
                <p>Change theme</p>
            </div>
        </header>
    );
};

export default Header;
