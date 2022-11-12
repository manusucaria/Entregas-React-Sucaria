import { Link } from 'react-router-dom';
import '../styles/Item.css';

const Item = ({producto}) => {
    return (
        <div className='producto'>
            <div className='datos-producto'>
                <img className='imagen-producto' src={require(`../assets/img/productos/${producto.imagen}.jpg`)} alt="Foto de Producto" />
                <p className='nombre-producto'>{producto.nombre}</p>
                <Link className='boton-detalles' to={process.env.PUBLIC_URL + "/productos/item/" + producto.id}>Ver Producto</Link>
            </div>
        </div>
    )
}

export default Item;


