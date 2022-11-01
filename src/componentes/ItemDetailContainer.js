import '../styles/ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import { getProductos } from '../services/products';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos().then( data => {
            setProductos(data)
        })
    }, []);
    return (
        <div className= "contenedor-itemDetail">
            <ItemDetail productos = {productos}/>
        </div>
    )
}

export default ItemDetailContainer