import React from 'react';
import Item from './Item';
import "../styles/ItemList.css";
import { getProductos } from '../services/products';
import { useEffect } from 'react';
import { useState } from 'react';


const ItemList = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos().then( data => {
            setProductos(data)
        })
    }, []);
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