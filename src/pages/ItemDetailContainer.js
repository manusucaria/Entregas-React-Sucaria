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
    const buscarProducto = productos.find(producto => {
        return producto.id === id;
    })
    return (
        <div className= "contenedor-itemDetail">
            {buscarProducto && <ItemDetail producto = {buscarProducto}/>}
        </div>
    )
}

export default ItemDetailContainer