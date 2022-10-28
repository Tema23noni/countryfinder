
import React, { useState } from 'react'
import { useContext } from 'react';
import cl from '../../App.module.scss';
import { Context } from './Main';
const Sort = () => {
  const {setQuery,query} = useContext(Context);
  
  return (
    <div className={cl.searchCountry}>
        <input placeholder='Search Country' value={query} onChange={(e)=> setQuery(e.target.value)} />
    </div>
  )
}

export default Sort