import React from 'react'
import cl from '../../App.module.scss';
import Select from './Select';
import Sort from './Sort';
import { CoutryItems } from './CoutryItems';
import Loading from '../Loading'
import { useFetch } from '../../hooks/useFetch'
import Erroro from '../Erroro';
import { createContext,useState } from 'react';
import { useEffect } from 'react';

export const Context = createContext();

const Main = ({data,error,loading, setRegion}) => {
    const [active,setActive] = useState(false);
    const [id, setId] = useState(0);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState('all');
    const [query, setQuery] = useState('');
    
    if(loading) return <Loading/>;
    if(error) return <Erroro/>;

    return (    
    <Context.Provider value={{data,active,setActive, id,setId, setSelected,selected, setSearch,search, query,setQuery}}>
        <main className={cl.mainCont}>
            <section className={cl.sort}>
                <Sort/>
                <Select/>
                </section>
            <CoutryItems />
        </main>
    </Context.Provider>
  )
}


export default Main