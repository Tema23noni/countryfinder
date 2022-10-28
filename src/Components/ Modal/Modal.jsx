import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Context } from '../Main.jsx/Main';
import cl from '../../App.module.scss';
let img  ="https://img.icons8.com/material/24/000000/delete-sign--v1.png"

const Modal = () => {
  const {active, setActive,data, id} = useContext(Context)
  const [country, setCountry] = useState()
  const [population, setPopulation] = useState();
  useEffect(() =>{
    setCountry(id)
  },[active])
  if(!country) return
  let flag = country.flags.png;
  return (
    <div className={active? cl.modal__active : cl.modal} onClick={() => setActive(false)}>
        <div className={cl.modal__cont} onClick={e => e.stopPropagation()}>
            <div className={cl.cont__img}>
              <img className={cl.img} src={flag}/>
              <img onClick={() => setActive(false)} className={cl.close} src={img}/>
            </div>
            <div className={cl.content}>
            <p>Population: {shortenNumRu(country.population)}</p>
            <p>Continent: {country.continents}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            
        </div>  
        </div>
    </div>
  )
}

/// Population
function shortenNumRu(num) {
  if( isNaN(num) ) throw new Error(num + " is not a Number!");

  let bubu = {
    "0": "",
    "1": " K",
    "2": " M",
    "3": " B",
  };

  let thousands = Math.floor( (("" + num).length - 1) / 3 );
  
  let coef = 1000 ** thousands;
  
  return ( num / coef ).toFixed(1) + bubu[ thousands ];
}
export default Modal