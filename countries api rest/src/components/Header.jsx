import React from 'react'
import moon from '/icon-moon.svg';
import sun from '/icon-sun.svg';
import './header.css';


const Header = ({ themeLight, setThemeLight }) => {
    const switchThemeIcon = themeLight ? moon : sun;
    const themeClass = themeLight ? "light" : "dark";

    const changeTheme = () => {
        setThemeLight(!themeLight);
    };

    return (
        <header className={`header ${themeClass}`}>
            <h3>Where in the World</h3>
            <div className='theme-div'>
                <span className="btn img" onClick={changeTheme}>
                    <img src={switchThemeIcon} alt="Dark Theme" />
                </span>
                <p>Change theme</p>
            </div>
        </header>
    );
};

export default Header;