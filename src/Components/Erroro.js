import React from 'react'
import cl from '../App.module.scss'
let img = 'https://img.icons8.com/dotty/80/000000/skull.png';
const Erroro = () => {
  return (
    <div className={cl.error}>
        <img src={img} alt='Error'/>
        <p>I cant find info</p>
    </div>
  )
}

export default Erroro