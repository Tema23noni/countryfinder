import React from 'react'
import { useContext, useState } from 'react';
import { Context } from './Main';
import cl from '../../App.module.scss';

const Select = () => {
  const {setSelected} = useContext(Context);
  const [values, setValues] = useState('all');
  const handleChange = (e) =>{
    setSelected(e.target.value)
    setValues(e.target.value)
  }
  return (
    <select value={values} onChange={handleChange}  className={cl.searchRegion} >
    <option value='all'>All</option>
    <option value='Africa'>Africa</option>
    <option value="Americas">America</option>
    <option value='Europe'>Eroupe</option>
    <option value='Asia'>Asia</option>
    <option value="Oceania">Oceanio</option>
  </select>
  )
}

export default Select