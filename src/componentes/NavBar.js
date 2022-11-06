import React from 'react';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';
import fotoPortada from '../assets/img/portada.jpg';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
        <nav className= "contenedor-nav">
          <Link to={process.env.PUBLIC_URL + "/"}>
            <img className= "foto-portada" src={fotoPortada} alt="Foto de Portada" />
          </Link>
            <div className= "contenedor-lista">
                <NavLink to={process.env.PUBLIC_URL + "/"} className= "listas">Inicio</NavLink>
                <NavLink to={process.env.PUBLIC_URL + "/itemdetailcontainer"} className= "listas">Productos</NavLink>
                <NavLink to={process.env.PUBLIC_URL + "/Cart"} className= "listas">Carrito</NavLink>
                <NavLink to={process.env.PUBLIC_URL + "/Nosotros"} className= "listas">Sobre Nosotros</NavLink>
            </div>
            <CartWidget className= "carrito"/>
        </nav>
  )
}

export default NavBar;