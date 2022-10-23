import React from 'react';
import '../styles/ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className= "contenedor-itemlist">
            <h1>{greeting}</h1>
            <div className= "contenedor-cantidades">
                <div className= "contenedor-signos">
                    <p className= "signo-menos">-</p>
                    <p className= "numero-cantidades">3</p>
                    <p className= "signo-mas">+</p>
                </div>
                <button className='boton-agregar'>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemListContainer;