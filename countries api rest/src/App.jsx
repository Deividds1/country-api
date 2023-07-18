import { useState } from 'react'
import './App.css'
import countriesData from './data.json'
import { Link } from 'react-router-dom'
import Header from './components/Header';


function App() {

  const [countriesList, setCountriesList] = useState(countriesData);
  const [themeLight, setThemeLight] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const themeClass = themeLight ? "light" : "dark";


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

  return (
    <div className={`app ${themeClass}`}>
      <Header themeLight={themeLight} setThemeLight={setThemeLight} />
      <div className='filter-container'>
        <input type="text" placeholder='Search for a country' value={searchValue}
          onChange={search} className={`input ${themeClass}`} />
        <select value={selectedOption} onChange={handleSelectChange} className={`select ${themeClass}`}>
          <option value="">Select an option</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className={`list ${themeClass}`}>
        {filteredCountryList.map((country) => (

          <Link to={`/country/${country.alpha3Code}`}>
            <div className={`country ${themeClass}`}>
              <img className="flag-list" src={country.flags.png} />
              <div className={`data ${themeClass}`}>
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
  )
}

export default App
