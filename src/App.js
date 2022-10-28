import cl from './App.module.scss';
import Header from './Components/Header';
import Main from './Components/Main.jsx/Main';
import { useFetch } from './hooks/useFetch';
import { useState } from 'react';
function App() {
  const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all');
  return (
    <div className={cl.contant}>
      <Header/>
      <Main data={data} loading={loading} error={error}/>
    </div>
 
  );
}

export default App;
