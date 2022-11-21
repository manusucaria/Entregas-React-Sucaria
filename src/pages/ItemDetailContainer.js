import '../styles/ItemDetailContainer.css';
import ItemDetail from '../componentes/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../app/api';

const ItemDetailContainer = () => {
    const {idProducto} = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        getProductById(idProducto).then( data => {
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