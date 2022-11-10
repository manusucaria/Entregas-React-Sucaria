
import '../styles/ItemDetail.css';
import { useMyContext } from '../context/cartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {
    const [state, setState] = useMyContext();
    let comprado = () => {
        setState(producto)
    }
    return (
        <div className='producto'>
            <div className='datos-producto'>
                <img className='imagen-producto' src={require(`../assets/img/productos/${producto.imagen}.jpg`)} alt="Foto de Producto" />
                <p className='nombre-producto'>{producto.nombre}</p>
                <p className='precio-producto'>{producto.precio}</p>
                <ItemCount />
                <button onClick={comprado} className='boton-agregar'>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail