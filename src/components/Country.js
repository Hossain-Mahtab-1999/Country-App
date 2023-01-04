import React from 'react'

import style from "./country.module.css";


const Country = (props) => {

    const {country} = props;
    const {name, flags, region, subregion , capital, population} = country;
  
    const handleRemoveCountry = (name) => {
      props.onRemoveCountry(name);
    }
    
    return (
    <article>
      <div className={style.country}>
          <img className={style.flag} src={flags.png} alt={name.common} />
          <h3>Name: {name.common}</h3>
          <h3>Region: {region}</h3>
          <h3>Sub-region: {subregion}</h3>
          <h3>Capital: {capital}</h3>
          <h3>Population: {population}</h3>
          <button className={style.btn} onClick={()=> {handleRemoveCountry(name.common)}} > Remove <i className='fa fa-trash fa'></i></button>
      </div>
    </article>
  )
}

export default Country
