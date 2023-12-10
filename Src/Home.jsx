// Home.jsx
import React from 'react';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import '../Cadastrar.css';

export default function Home() {
  const listaLocalStorage = JSON.parse(localStorage.getItem('Lista')) || [];

  return (
    <div>
      <Navbar nomeSite={'KPOP-MV'} />
      <div className='card-container'>
        <Card listaMV={listaLocalStorage} />
      </div>
    </div>
  );
}
