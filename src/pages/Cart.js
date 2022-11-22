import React from 'react'
import CartItem from '../componentes/CartItem';
import { useMyContext } from '../context/cartContext';
import '../styles/Cart.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Formulario from '../componentes/Formulario';
import { createPedido } from '../app/api';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Cart = () => {
    const {state, setState, eliminarTodo} = useMyContext([]);
    const total = state.map(item => item.precio*item.cantidad).reduce((prev, curr) => prev + curr, 0);
    const terminarCompra = (data) => {
        const pedidoFinal = [];
        state.map((producto) => {
            const pedido = {nombre: producto.nombre, precio: producto.precio * producto.cantidad, cantidad:producto.cantidad};
            pedidoFinal.push(pedido)
        });
        let cliente = data;
        createPedido({pedidoFinal, cliente, total});
        notifyCompra()
    }
    function notifyCompra () {
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra Finalizada',
            showConfirmButton: false,
            timer: 1500
        })
    }

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
                {
                    state.length !== 0?
                    <div>
                        {state.map( (producto) =>
                            <CartItem
                                producto = {producto}
                                key={producto.id}
                            />
                        )}
                        <div className='contenedorCierre'>
                            <button onClick={() => eliminarTodo()} className='boton-eliminar'>
                                <p className='texto-eliminar'>Eliminar Todos los Productos</p>
                            </button>
                            <p className='total'>Valor Total: ${total}</p>
                        </div>
                        <Formulario addOrder={ data => terminarCompra(data)} />
                    </div>
                    : <Link to={process.env.PUBLIC_URL + "/productos"} className= "carritoVacio">Volver a Productos</Link>
                }
            </table>
            <ToastContainer />
        </div>
        )
}

export default Cart;