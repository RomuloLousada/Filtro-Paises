import React from 'react'
import { formatValue } from '../../helpers/format';
import HeaderCSS from './header.module.css';

export default function Header({ onChangeFilter, filter, numCountries, population }) {
  const getFilter = (event) => {
    const newText = event.target.value;

    onChangeFilter(newText);
  };

  return (
    <div className={HeaderCSS.flexRow}>
      <input className={HeaderCSS.inputWidth} type="text" value={filter} onChange={getFilter} placeholder="Filtro" />
      <span>Num. Countries: <strong>{numCountries}</strong></span>
      <span>Total Population: <strong>{formatValue(population)}</strong></span>
    </div>
  )
}
