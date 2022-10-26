import React from 'react';
import {useState} from 'react';

const Restar = () => {
    let [v, setV] = useState(0);
    const resta = () => {
        if (v === 0) {
            return
        }else{
            setV(v - 1);
        }
        console.log(v)
    }
    return (
        <p onClick={resta} className= "signo-menos">-</p>
    )
}

export default Restar