import React from 'react';
import '../styles/MostrarCantidad.css';
import Sumar from './Sumar.js';
import Restar from './Restar.js';

const MostrarCantidad = () => {
  let cantidadTotal = 1;
  return (
    <div className='cantidades'>
      <Sumar className='signo-mas'/>
      <p className= "numero-cantidades">{cantidadTotal}</p>
      <Restar className='signo-menos'/>
    </div>
  )
}

export default MostrarCantidad