import React, { useEffect, useState } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredPopulation, setFilteredPopulation] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const json = await res.json();
  
      const initialCountries = json.map(({name, numericCode, flag, population}) => {
        return {
          id: numericCode,
          name: name,
          filterName: name.toLowerCase(),
          flag: flag,
          population: population
        }
      });
      
      const filteredPopulation = sumTotalPopulation(initialCountries);
      
      setCountries(initialCountries);
      setFilteredCountries(initialCountries);
      setFilteredPopulation(filteredPopulation);
    }
    
    fetchData();
  }, [])

  const sumTotalPopulation = (countries) => {
    const totalPopulation = countries.reduce((acc, cur) => {
      return acc + cur.population;
    }, 0);

    return totalPopulation;
  }

  const applyFilter = (newFilter) => {
    setFilter(newFilter);

    const newFilterLowerCase = newFilter.toLowerCase();

    const newFilteredCountries = countries.filter((country) => {
      return country.filterName.includes(newFilterLowerCase);
    });

    const newFilteredPopulation = sumTotalPopulation(newFilteredCountries);

    setFilteredCountries(newFilteredCountries);
    setFilteredPopulation(newFilteredPopulation);
  }

  return (
    <div className="container">
      <Header filter={filter} population={filteredPopulation} numCountries={filteredCountries.length} onChangeFilter={applyFilter}/>
      <Countries countries={filteredCountries}/>
    </div>
  );
}

export default App;
