import '../styles/ItemListContainer.css';
import ItemList from '../componentes/ItemList';
import { getProductos } from '../services/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idTipo} = useParams();
    useEffect(() => {
        getProductos(idTipo).then(data => {
            setProductos(data)
        })
    }, [idTipo]);
    return (
        <div className= "contenedor-itemlist">
            <h1 className='titulo'>Bienvenidos</h1>
            <div className='categorias'>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos/budines'}>Budines</Link>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos'}>Todas</Link>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos/tortas'}>Tortas</Link>
            </div>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer;

