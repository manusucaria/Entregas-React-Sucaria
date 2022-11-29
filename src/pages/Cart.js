import React from 'react'
import CartItem from '../componentes/CartItem';
import { useState } from 'react';
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
    const {state, eliminarTodo, compraFinalizada} = useMyContext([]);
    const [idPedido, setIdPedido] = useState();
    const total = state.map(item => item.precio*item.cantidad).reduce((prev, curr) => prev + curr, 0);
    const terminarCompra = async(data) => {
        const pedidoFinal = state.map((producto) => ({nombre: producto.nombre, precio: producto.precio * producto.cantidad, cantidad: producto.cantidad}));
        let cliente = data;
        let hoy = new Date();
        let fecha = hoy.toLocaleString();
        const idPed = await createPedido({pedidoFinal, cliente, total, fecha});
        setIdPedido(idPed);
        compraFinalizada();
        if(cliente.nombre && cliente.telefono && cliente.email){
            notifyCompra()
        }
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
            <div className='contenedor-prod-carrito'>
                <div className='filas-tabla'>
                    <p className='titulos-carrito-1'>Nombre</p>
                    <p className='titulos-carrito-2'>Cantidad</p>
                    <p className='titulos-carrito-3'>Precio</p>
                    <p className='titulos-carrito-4'>Opciones</p>
                </div>
                {
                    state.length !== 0?
                    <div className='contenedorItems'>
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
                        <Formulario addOrder={data => terminarCompra(data)} />
                    </div>
                    : <Link to={process.env.PUBLIC_URL + "/productos"} className= "carritoVacio">Volver a Productos</Link>
                }
                {idPedido?<p className='idPedido'>La ID de su pedido es: {idPedido}</p>:<p></p>}
            </div>
            <ToastContainer />
        </div>
        )
}

export default Cart;