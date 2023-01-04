import React, { useEffect, useState } from 'react'
import Countries from './components/Countries';


import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"
import Search from './components/Search';

const url = 'https://restcountries.com/v3.1/all';


const App = () => {

    const [isLoading , setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries]= useState([]);
    const [filteredCountries, setFilteredCountries]= useState(countries);

    const fetchData= async(url) => {
      try{
        const resopnse = await fetch(url);
        const data = await resopnse.json();
        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    useEffect(() => {
      fetchData(url);
    }, [])
    

    const handleRemoveCountry = (name) => {
      const filter= filteredCountries.filter((country) => country.name.common !== name);
      setFilteredCountries(filter);
    }

    const handleSearch = (searchValue) =>{
      let value = searchValue.toLowerCase();
      const newCountries = countries.filter((country) => {
        country.name.common.toLowerCase()
        return country.name.common.toLowerCase().startsWith(value);
      }); 
      setFilteredCountries(newCountries);
    }

    return (
    <>
      <h1> <span>★ ★ ★ </span> Country App <span>★ ★ ★ </span></h1>
      <Search  onSearch={handleSearch}/>
      {isLoading &&  <h1>Loading...</h1>} 
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries = {filteredCountries} onRemoveCountry = {handleRemoveCountry} /> }
    </>
  )
}

export default App  