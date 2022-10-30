import React from 'react';
import { useState } from 'react';
import '../styles/Item.css';

const Item = (props) => {
    let [contador, setContador] = useState(1);
    let suma = () => {
        setContador(contador >= 10 ? contador : contador + 1)
    }
    let resta = () => {
        setContador(contador <= 1 ? contador : contador - 1)
    }
    let comprado = () => {
    alert("Producto Agregado")
    }
    return (
        <div className='producto'>
            <div className='datos-producto'>
                <img className='imagen-producto' src={require(`../assets/img/productos/${props.imagen}.jpg`)} alt="Foto de Producto" />
                <p className='nombre-producto'>{props.nombre}</p>
                <p className='precio-producto'>{props.precio}</p>
                <div className='cantidades'>
                    <p onClick={resta} className= "signo-menos">-</p>
                    <p className= "numero-cantidades">{contador}</p>
                    <p onClick={suma} className= "signo-mas">+</p>
                </div>
                <button onClick={comprado} className='boton-agregar'>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Item;


