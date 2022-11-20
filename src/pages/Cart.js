import React from 'react'
import CartItem from '../componentes/CartItem';
import { useMyContext } from '../context/cartContext';
import '../styles/Cart.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const {state, eliminarTodo} = useMyContext([]);

    return (
        <div className='body-carrito'>
            <h2 className='titulo-carrito'>Carrito</h2>
            <table className='contenedor-prod-carrito'>
                <thead>
                    <tr className='filas-tabla'>
                        <th className='titulos-carrito-1'>Nombre</th>
                        <th className='titulos-carrito-2'>Cantidad</th>
                        <th className='titulos-carrito-3'>Precio</th>
                        <th className='titulos-carrito-4'>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map( (producto, i) =>
                        <CartItem
                            producto = {producto}
                            key={i}
                        />
                    )}
                </tbody>
            </table>
            <button onClick={() => eliminarTodo()} className='boton-eliminar'><p className='texto-eliminar'>Eliminar Todos los Productos</p></button>
            <ToastContainer />
        </div>
        )
}

export default Cart;