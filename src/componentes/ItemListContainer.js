import React from 'react';
import '../styles/ItemListContainer.css';
import ItemList from './ItemList';
import { getProductos } from '../services/products';
import {useEffect} from 'react';


const ItemListContainer = ({greeting}) => {
    useEffect(() => {
        getProductos().then( data => {
            const arrayProductos = data
            console.log(arrayProductos)
        })
    }, []);

    return (
        <div className= "contenedor-itemlist">
            <h1>{greeting}</h1>
            <ItemList arrayProductos/>
        </div>
    )
}

export default ItemListContainer;