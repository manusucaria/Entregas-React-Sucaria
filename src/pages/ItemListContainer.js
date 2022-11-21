import '../styles/ItemListContainer.css';
import ItemList from '../componentes/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getProductsByCategory, getProducts } from '../app/api';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idTipo} = useParams();
    useEffect(() => {
        idTipo ? getProductsByCategory(idTipo).then(data => {
            setProductos(data)
        })
        : getProducts().then(data => {
            setProductos(data)
        })
    }, [idTipo]);
    return (
        <div className= "contenedor-itemlist">
            <h2 className='titulo-productos'>Conocé Nuestros Productos</h2>
            <div className='categorias'>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos/budines'}>Budines</Link>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos/tortas'}>Tortas</Link>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos'}>Todas</Link>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos/galletas'}>Galletas</Link>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos/muffins'}>Muffins</Link>
            </div>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer;

