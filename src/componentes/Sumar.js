import React from 'react';
import {useState} from 'react';

const Sumar = () => {
    let stock = 10;
    let [v, setV] = useState(0);
    const suma = () => {
        if(v === stock + 1) {
            return
        }else{
            setV(v + 1);
        }
        console.log(v)
    }
    return (
        <p onClick={suma} className= "signo-mas">+</p>
    )
}

export default Sumar