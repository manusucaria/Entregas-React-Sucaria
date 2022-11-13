import React from 'react'
import { useMyContext } from '../context/cartContext';
import '../styles/Cart.css';

const Cart = () => {
    const [state, setState] = useMyContext();
    const producto = {...state};
    const eliminarProducto = () => {
        setState()
    }
    const eliminarTodo = () => {
        setState()
    }
    return (
        <div>
            <h2 className='titulo-carrito'>Carrito</h2>
            <table className='contenedor-prod-carrito'>
                <tr className='filas-tabla'>
                    <th className='titulos-carrito-1'>Nombre</th>
                    <th className='titulos-carrito-2'>Cantidad</th>
                    <th className='titulos-carrito-3'>Precio</th>
                    <th className='titulos-carrito-4'>Opciones</th>
                </tr>
                <tr className='filas-tabla'>
                    <div className='listas-carrito-1'>
                        <p className='nombre-item'>{producto.nombre}</p>
                        {/* <img className='foto-producto' src={require(`../assets/img/productos/${producto.imagen}.jpg`)} alt="Foto de Producto" /> */}
                    </div>
                    <p className='listas-carrito-2'>{producto.cantidad}</p>
                    <p className='listas-carrito-3'>${producto.precio}</p>
                    <button onClick={eliminarProducto} className='boton-eliminar-producto'>Eliminar Producto</button>
                </tr>
            </table>
            <button onClick={eliminarTodo} className='boton-eliminar'><p className='texto-eliminar'>Eliminar Todos los Productos</p></button>
        </div>
        )
}

export default Cart;