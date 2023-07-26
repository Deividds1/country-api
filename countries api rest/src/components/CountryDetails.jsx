import React from "react";
import countriesData from "../data.json";
import { useParams, Link } from "react-router-dom";
import "./countryDetails.css";
import Header from "./Header";
import { useTheme } from '../ThemeContext';

function CountryDetails() {
    const { themeLight } = useTheme();
    const themeClass = themeLight ? "light" : "dark";
    const { alphacode } = useParams();
    const country = countriesData.find((country) => country.alpha3Code === alphacode);


    const currencyName = country.currencies?.[Object.keys(country.currencies)[0]]?.name || "N/A";
    return (
        <div className={`country-container ${themeClass}`}>
            <Header />
            <div className="data-container">
                <Link to={"/"}>
                    <div className={`back-btn ${themeClass}`}><p>Back</p></div>
                </Link>
                <div className="info-container">
                    <div className="flag-container">
                        <img className="country-flag" src={country.flags.png} alt="" />
                    </div>

                    <div className="details-container">
                        <h2>{country.name}</h2>
                        <div className="details">
                            <div className="main-details">
                                <p>Native Name: {country.nativeName}</p>
                                <p>Population: {country.population}</p>
                                <p>Region: {country.region}</p>
                                <p>Sub Region: {country.subregion}</p>
                                <p>Capital: {country.capital}</p>
                            </div>
                            <div className="other-details">
                                <p>Top Level Domain: {country.topLevelDomain}</p>
                                <p>Currencies: {currencyName}</p>
                                <p>Languages: {country.languages[Object.keys(country.languages)[0]].name}</p>
                            </div>
                        </div>
                        <div>
                            <div className="border-container">
                                <h3>Border Countries:</h3>
                                <div className="border-countries">
                                    {country.borders ? country.borders.map((item, index) => (
                                        <Link to={`/country/${item}`} key={index}>
                                            <div className={`border-country ${themeClass}`}>{item}</div>
                                        </Link>
                                    )) : '-'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;
