import '../styles/ItemDetail.css';
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {
    const productoNuevo = producto;
    return (
        <div className='producto-detail'>
            <div className='datos-producto-detail'>
                <img className='imagen-producto-detail' src={producto.imagen} alt="Foto de Producto" />
                <p className='nombre-producto-detail'>{producto.nombre}</p>
                <p className='precio-producto-detail'>${producto.precio}</p>
                <ItemCount producto={productoNuevo} />
            </div>
        </div>
    )
}

export default ItemDetail