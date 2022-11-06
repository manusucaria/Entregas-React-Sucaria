import '../styles/ItemListContainer.css';
import ItemList from '../componentes/ItemList';
import { getProductos } from '../services/products';
import { useEffect, useState } from 'react';


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos().then( data => {
            setProductos(data)
        })
    }, []);
    return (
        <div className= "contenedor-itemlist">
            <h1 className='titulo'>{greeting}</h1>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer;