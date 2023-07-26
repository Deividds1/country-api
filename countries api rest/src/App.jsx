import React, { useState } from 'react';
import './App.css';
import countriesData from './data.json';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import { useTheme } from './ThemeContext';

function App() {
  const { themeLight } = useTheme();
  const [countriesList] = useState(countriesData);
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const search = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredCountryList = countriesList.filter((country) =>
    country.name.toLowerCase().includes(searchValue.toLowerCase()) &&
    country.region.toLowerCase().includes(selectedOption.toLowerCase())
  );

  console.log(countriesList);

  return (
    <div className={`app ${themeLight ? "light" : "dark"}`}>
      <Header />
      <div className='filter-container'>
        <input type="text" placeholder='Search for a country' value={searchValue}
          onChange={search} className={`input ${themeLight ? "light" : "dark"}`} />
        <select value={selectedOption} onChange={handleSelectChange} className={`select ${themeLight ? "light" : "dark"}`}>
          <option value="">Select an option</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className={`list ${themeLight ? "light" : "dark"}`}>
        {filteredCountryList.map((country) => (
          <Link to={`/country/${country.alpha3Code}`} key={country.alpha3Code}>
            <div className={`country ${themeLight ? "light" : "dark"}`}>
              <img className="flag-list" src={country.flags.png} alt={country.name} />
              <div className={`data ${themeLight ? "light" : "dark"}`}>
                <h4 className='country-name'>{country.name}</h4>
                <p className='p-data'>Population: {country.population}</p>
                <p className='p-data'>Region: {country.region}</p>
                <p className='p-data'>Capital: {country.capital}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
