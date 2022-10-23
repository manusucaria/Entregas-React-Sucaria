import React from 'react';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';
import fotoPortada from '../assets/img/portada.jpg';

const NavBar = () => {
  return (
        <nav className= "contenedor-nav">
            <img className= "foto-portada" src={fotoPortada} alt="Foto de Portada" />
            <div className= "contenedor-lista">
                <p className= "listas">Home</p>
                <p className= "listas">Balls</p>
                <p className= "listas">Clubs</p>
            </div>
            <CartWidget />
        </nav>
  )
}

export default NavBar