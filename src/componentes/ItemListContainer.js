import React from 'react';
import '../styles/ItemListContainer.css';
import ItemList from './ItemList';


const ItemListContainer = ({greeting}) => {
    return (
        <div className= "contenedor-itemlist">
            <h1>{greeting}</h1>
            <ItemList />
        </div>
    )

}

export default ItemListContainer;