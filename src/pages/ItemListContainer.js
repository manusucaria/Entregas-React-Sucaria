import '../styles/ItemListContainer.css';
import ItemList from '../componentes/ItemList';
import { getProductos } from '../services/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    let {idTipo} = useParams();
    useEffect(() => {
        getProductos(idTipo).then( data => {
            setProductos(data)
        })
    }, [idTipo]);
    let filtroBudin = () => {
        const filtroTorta = productos.filter(producto => producto.tipo === "budin")
        setProductos(filtroTorta)
    }
    let filtroTorta = () => {
        const filtroTorta = productos.filter(producto => producto.tipo === "torta")
        setProductos(filtroTorta)
    }
    let filtroTodas = () => {
        getProductos().then( data => {
            setProductos(data)
        })
    }
    return (
        <div className= "contenedor-itemlist">
            <h1 className='titulo'>Bienvenidos</h1>
            <div className='categorias'>
                <p onClick={filtroBudin} className='listas-categorias'>Budines</p>
                <p onClick={filtroTodas} className='listas-categorias'>Todas</p>
                <p onClick={filtroTorta} className='listas-categorias'>Tortas</p>
            </div>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer;

