import React from 'react';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';
import fotoPortada from '../assets/img/portada.jpg';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
        <nav className= "contenedor-nav">
          <Link to={"Entregas-React-Sucaria/"}>
            <img className= "foto-portada" src={fotoPortada} alt="Foto de Portada" />
          </Link>
            <div className= "contenedor-lista">
                <NavLink to={"Entregas-React-Sucaria/"} className= "listas">Inicio</NavLink>
                <NavLink to={"Entregas-React-Sucaria/itemdetailcontainer"} className= "listas">Productos</NavLink>
                <NavLink to={"Entregas-React-Sucaria/Cart"} className= "listas">Carrito</NavLink>
                <NavLink className= "listas">Sobre Nosotros</NavLink>
            </div>
            <CartWidget className= "carrito"/>
        </nav>
  )
}

export default NavBar;