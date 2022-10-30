import React from 'react';
import Item from './Item';
import "../styles/ItemList.css";


const productos = [
    {
        nombre: "Lemon Pie",
        imagen: "lemon",
        precio: "$700 (por porción)"
    },
    {
        nombre: "Budin de Chocolate",
        imagen: "budinchocolate",
        precio: "$900"
    },
    {
        nombre: "Milhojas",
        imagen: "milhojas",
        precio: "$700 (por porción)"
    },
]

const ItemList = () => {
    return (
        <div className='contenedor-signos'>
            {productos.map( (producto, i) =>
                <Item className="productos"
                    imagen = {producto.imagen}
                    nombre = {producto.nombre}
                    precio = {producto.precio}
                    key={i}
                />
            )}
        </div>
    )
}

export default ItemList