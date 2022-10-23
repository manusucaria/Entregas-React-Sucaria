import React from 'react';
import '../styles/CartWidget.css';
import fotoCarrito from '../assets/img/carrito.png';

const CartWidget = () => {
    return (
        <div className= "contenedor-carrito">
            <img className= "foto-carrito" src={fotoCarrito} alt="Foto de Carrito" />
            <p className= "numero-carrito">4</p>
        </div>
    )
}

export default CartWidget