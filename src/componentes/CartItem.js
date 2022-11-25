import { useMyContext } from '../context/cartContext';
import '../styles/Cart.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({producto}) => {
    const {eliminarProducto} = useMyContext([]);
    return (
        <div className='gralTablas'>
            <div className='filas-tabla'>
                <div className='listas-carrito-1'>
                    <p className='nombre-item'>{producto.nombre}</p>
                    <img className='foto-producto' src={producto.imagen} alt="Foto de Producto" />
                </div>
                <p className='listas-carrito-2'>{producto.cantidad}</p>
                <p className='listas-carrito-3'>${producto.precio*producto.cantidad}</p>
                <button onClick={() => eliminarProducto(producto)} className='boton-eliminar-producto'>Eliminar Producto</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CartItem