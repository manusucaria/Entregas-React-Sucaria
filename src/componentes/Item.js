import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Item.css';

const Item = ({producto}) => {
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
                <img className='imagen-producto' src={require(`../assets/img/productos/${producto.imagen}.jpg`)} alt="Foto de Producto" />
                <p className='nombre-producto'>{producto.nombre}</p>
                <p className='precio-producto'>{producto.precio}</p>
                <div className='cantidades'>
                    <p onClick={resta} className= "signo-menos">-</p>
                    <p className= "numero-cantidades">{contador}</p>
                    <p onClick={suma} className= "signo-mas">+</p>
                </div>
                <button onClick={comprado} className='boton-agregar'>Agregar al Carrito</button>
                <Link to={"/Entregas-React-Sucaria/item/"+producto.nombre}>Ver producto</Link>
            </div>
        </div>
    )
}

export default Item;


