import React from 'react'
import cl from '../App.module.scss'
const Loading = () => {

  return (
    <div className={cl.load}>

        <p className={cl.loader}>Waiting <span>.</span><span>.</span><span>.</span></p>
    </div>
  )
}

export default Loading