import React from 'react'
import CountryCSS from './country.module.css';

export default function Country({ country }) {
  const { flag } = country;

  return (
    <div>
      <div className={CountryCSS.imgContainer}>
        <span className={CountryCSS.helper}></span>
        <img className={CountryCSS.imgSize} src={flag} alt="Flag"/>
      </div>
      <div>
        {country.name}
      </div>
    </div>
  )
}
