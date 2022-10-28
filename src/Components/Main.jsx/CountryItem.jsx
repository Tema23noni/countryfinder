import React from 'react'
import { useContext } from 'react';
import { Context } from './Main';
import cl from '../../App.module.scss';
const CountryItem = ({data,id}) => {
    const {active, setId, setActive} = useContext(Context);
    const openModule = () =>{
        setActive(!active)
        setId(data)
    }
    let flag = data.flags.png;
    return (
    <div className={cl.countryItem} onClick={openModule}>
        <p className={cl.nameCountry}>{data.name.common}</p>
        <div className={cl.scale}>
            <img src={flag} className={cl.imgCountry}/>
        </div>          
    </div>
  )
}

export default CountryItem