import React from 'react';
import '../styles/ItemListContainer.css';
import Producto from './Producto';


const ItemListContainer = ({greeting}) => {
    return (
        <div className= "contenedor-itemlist">
            <h1>{greeting}</h1>
            <div className= "contenedor-cantidades">
                <div className= "contenedor-signos">
                    <Producto className="productos"
                        imagen= 'lemon'
                        nombre= 'Lemon Pie'
                        precio= '$700 (por porción)'
                    />
                    <Producto className="productos"
                        imagen= 'budinchocolate'
                        nombre= 'Budin de Chocolate'
                        precio= '$900'
                    />
                    <Producto className="productos"
                        imagen= 'milhojas'
                        nombre= 'Milhojas'
                        precio= '$700 (por porción)'
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;