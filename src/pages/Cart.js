import React from 'react'
import { useMyContext } from '../context/cartContext';
import '../styles/Cart.css';

const Cart = () => {
    const [state, setState] = useMyContext();
    const producto = {...state};
    return (
        <div>
            <div className='contenedor-prod-carrito'>
                <p>{producto.nombre}</p>
                <p>{producto.cantidad}</p>
                <p>{producto.precio}</p>
                <button>Eliminar Producto</button>
            </div>
            <button>Eliminar Todos los Productos</button>
        </div>
        )
}

export default Cart