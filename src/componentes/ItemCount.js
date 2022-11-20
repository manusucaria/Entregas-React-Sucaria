import React from 'react';
import { useState } from 'react';
import '../styles/ItemDetail.css';
import { useMyContext } from '../context/cartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const ItemCount = ({producto}) => {
    let [contador, setContador] = useState(1);
    producto.cantidad = contador;
    let suma = () => {
        setContador(contador >= 10 ? contador : prev => prev + 1)
	}
	let resta = () => {
        setContador(contador <= 1 ? contador : prev => prev - 1)
	}
    const {addToCart, estadoBoton} = useMyContext([]);
    return (
        <div>
            {
                estadoBoton === 0
                ?
                <div>
                    <div className='cantidades'>
                        <p onClick={resta} className= "signo-menos">-</p>
                        <p className= "numero-cantidades">{contador}</p>
                        <p onClick={suma} className= "signo-mas">+</p>
                    </div>
                    <button onClick={() => addToCart(producto)} className='boton-agregar-detail'>Agregar al Carrito</button>
                </div>
                :<Link to={process.env.PUBLIC_URL + "/cart"} className= "terminarCompra">Terminar Compra</Link>
            }
            <ToastContainer />
        </div>
    )
}
export default ItemCount;
