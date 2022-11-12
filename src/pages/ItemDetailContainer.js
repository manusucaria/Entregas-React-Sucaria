import '../styles/ItemDetailContainer.css';
import ItemDetail from '../componentes/ItemDetail';
import { getProducto } from '../services/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {idProducto} = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        getProducto(idProducto).then( data => {
            setItem(data)
        })
    }, [idProducto]);
    return (
        <div className= "contenedor-itemDetail">
            <ItemDetail producto = {item}/>
        </div>
    )
}

export default ItemDetailContainer