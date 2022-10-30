import React from 'react';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';
import fotoPortada from '../assets/img/portada.jpg';

const NavBar = () => {
  return (
        <nav className= "contenedor-nav">
            <img className= "foto-portada" src={fotoPortada} alt="Foto de Portada" />
            <div className= "contenedor-lista">
                <p className= "listas">Inicio</p>
                <p className= "listas">Carrito</p>
                <p className= "listas">Sobre Nosotros</p>
            </div>
            <CartWidget />
        </nav>
  )
}

export default NavBar