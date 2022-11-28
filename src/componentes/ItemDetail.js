import '../styles/ItemDetail.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useMyContext } from '../context/cartContext';

const ItemDetail = ({producto}) => {
    const {state} = useMyContext([]);
    const productoNuevo = producto;
    return (
        <div className='producto-detail'>
            <div className='datos-producto-detail'>
                <div className='contenedor-detalles'>
                    <img className='imagen-producto-detail' src={producto.imagen} alt="Foto de Producto" />
                    <p className='detalles'>{producto.descripcion}</p>
                </div>
                <p className='nombre-producto-detail'>{producto.nombre}</p>
                <p className='precio-producto-detail'>${producto.precio}</p>
                {
                    state.find(prod => prod.id === producto.id)?
                    <Link to={process.env.PUBLIC_URL + "/cart"} className= "terminarCompra">Terminar Compra</Link>
                    : <ItemCount producto={productoNuevo} />
                }
            </div>
        </div>
    )
}

export default ItemDetail