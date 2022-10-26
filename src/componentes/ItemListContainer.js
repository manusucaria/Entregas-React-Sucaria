import React from 'react';
import '../styles/ItemListContainer.css';
import MostrarCantidad from './MostrarCantidad';

const ItemListContainer = ({greeting}) => {
    return (
        <div className= "contenedor-itemlist">
            <h1>{greeting}</h1>
            <div className= "contenedor-cantidades">
                <div className= "contenedor-signos">
                    <MostrarCantidad />
                </div>
                <button className='boton-agregar'>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemListContainer;