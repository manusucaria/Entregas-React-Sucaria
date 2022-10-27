import React from 'react';
import {useState} from 'react';

const Sumar = () => {
    let stock = 10;
    let [v, setV] = useState(0);
    const suma = () => {
        setV(v = stock ? v : v + 1)
        console.log(v)
    }
    return (
        <p onClick={suma} className= "signo-mas">+</p>
    )
}

export default Sumar