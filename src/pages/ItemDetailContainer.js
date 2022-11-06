import '../styles/ItemDetailContainer.css';
import ItemDetail from '../componentes/ItemDetail';
import { getProductos } from '../services/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos().then( data => {
            setProductos(data)
        })
    }, []);

    return (
        <div className= "contenedor-itemDetail">
        {id} aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <ItemDetail productos = {productos}/>
        </div>
    )
}

export default ItemDetailContainer