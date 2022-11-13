import { useMyContext } from '../context/cartContext';
import '../styles/Cart.css';

const CartItem = ({producto}) => {
    const [state, setState] = useMyContext([]);
    console.log(producto)
    const eliminarProducto = () => {
        const eliminado = state.find(item => item.id === producto.id);
        const pedidos = state?state.splice(state.indexOf(eliminado), 1):[];
        setState(state.splice(state.indexOf(pedidos), 1))
    }
    return (
        <div>
            <tr className='filas-tabla'>
                <div className='listas-carrito-1'>
                    <p className='nombre-item'>{producto.nombre}</p>
                    {/* <img className='foto-producto' src={require(`../assets/img/productos/${producto.imagen}.jpg`)} alt="Foto de Producto" /> */}
                </div>
                <p className='listas-carrito-2'>{producto.cantidad}</p>
                <p className='listas-carrito-3'>${producto.precio*producto.cantidad}</p>
                <button onClick={eliminarProducto} className='boton-eliminar-producto'>Eliminar Producto</button>
            </tr>
        </div>
    )
}

export default CartItem