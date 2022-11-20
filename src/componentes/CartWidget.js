import React from 'react';
import '../styles/CartWidget.css';
import fotoCarrito from '../assets/img/carrito.png';
import { useMyContext } from '../context/cartContext';

const CartWidget = () => {
    const {state} = useMyContext([]);
    return (
        <div className= "contenedor-carrito">
            <img className= "foto-carrito" src={fotoCarrito} alt="Foto de Carrito" />
            {state.length !== 0 ?
            <p className= "numero-carrito">{state.length}</p>
            : <p></p>
            }

        </div>
    )
}

export default CartWidget