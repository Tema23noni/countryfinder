import React from 'react'
import { useState } from 'react'
import cl from '../../App.module.scss'
import CountryItem from './CountryItem'
import Modal from '../ Modal/Modal'
import { Context } from './Main'
import { useContext, useEffect } from 'react'

export const CoutryItems = () => {
    const {data, selected, query, setQuery, active} = useContext(Context); 
    const [currentItems, setCurrentItems] = useState(20);
    const [checkSelect, setCheclSelect] = useState(currentItems); 
    const [checkQuery, setChecklQueary] = useState(query);
   
    useEffect(() => {
        document.addEventListener('scroll', scrollHandelr)
      
        return () => {
          document.removeEventListener('scroll', scrollHandelr)
        }
      }, [currentItems])
    useEffect(() =>{
        if(checkQuery !== query){
            setCurrentItems(20)
            setChecklQueary(query);  
        } 
        if(selected !== selected){ 
            setCurrentItems(20)
            setCheclSelect(selected)};
    },[])

    const scrollHandelr = (e) =>{
        
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)< 100){
            if(data.length - currentItems < 10){
                return setCurrentItems(data.length)
            }
            return setCurrentItems(currentItems+10)
        }
    }
   
    if(!data) return;
    
    const filtered = data.filter((item,id) =>{
        let name = item.name.common;
        let ofName = item.name.official;
        let abbrev = item.altSpellings[1]
        return String(name).toLocaleLowerCase().includes(query.toLocaleLowerCase()) || String(ofName).toLocaleLowerCase().includes(query.toLocaleLowerCase())  || String(abbrev).toLocaleLowerCase().includes(query.toLocaleLowerCase()) 
    })
    return (

    <section className={cl.coutryItems}>
        {
            filtered.map((item,id) =>{
                if(currentItems > id){
                    if(selected === 'all'){
                        return <CountryItem data={item} key={id} />                       
                    }
                    if(selected === item.region){
                        return <CountryItem data={item} key={id} />   
                    }
                }else{
                    return
                }
                
            })
        }
        {!active
            ?''
            :<Modal/>
        }
         
    </section>
  )
}

