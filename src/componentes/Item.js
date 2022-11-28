import { Link } from 'react-router-dom';
import '../styles/Item.css';

const Item = ({producto}) => {
    return (
        <div className='producto'>
            <div className='datos-producto'>
            <div className='contenedor-detail'>
                <img className='imagen-producto' src={producto.imagen} alt="Foto de Producto" />
                <p className='detalles-item'>{producto.descripcion}</p>
            </div>
                <p className='nombre-producto'>{producto.nombre}</p>
                <Link className='boton-detalles' to={process.env.PUBLIC_URL + "/productos/item/" + producto.id}>Ver Producto</Link>
            </div>
        </div>
    )
}

export default Item;


