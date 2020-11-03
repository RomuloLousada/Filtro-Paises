import React from 'react'
import Country from '../country/Country';
import CountriesCSS from './countries.module.css';

export default function Countries({ countries }) {
  return (
    <div className={CountriesCSS.flexContainer}>
      {
        countries.map((country) => {
          return <Country key={country.id} country={country} />
        })
      }
    </div>
  )
}
