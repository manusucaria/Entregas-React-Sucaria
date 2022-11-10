import React from 'react';
import { useState } from 'react';
import '../styles/ItemDetail.css';

const ItemCount = () => {
    let [contador, setContador] = useState(1);
    let suma = () => {
        setContador(contador >= 10 ? contador : contador + 1)
    }
    let resta = () => {
        setContador(contador <= 1 ? contador : contador - 1)
    }
    return (
        <div className='cantidades'>
            <p onClick={resta} className= "signo-menos">-</p>
            <p className= "numero-cantidades">{contador}</p>
            <p onClick={suma} className= "signo-mas">+</p>
        </div>
    )
}
export default ItemCount;
