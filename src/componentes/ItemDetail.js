
import '../styles/ItemDetail.css';
import { useMyContext } from '../context/cartContext';
import ItemCount from './ItemCount';

class Pedido{
    constructor(id, tipo, nombre, imagen, cantidad, precio){
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.precio = precio;
    }
};
const ItemDetail = ({producto}) => {
    const [state, setState] = useMyContext();
    let comprado = () => {
        const pedidoNuevo = new Pedido(producto.id, producto.tipo, producto.nombre, producto.imagen, producto.cantidad, producto.precio);
        setState(pedidoNuevo)
    }
    return (
        <div className='producto'>
            <div className='datos-producto'>
                {/* <img className='imagen-producto' src={require(`../assets/img/productos/${producto.imagen}.jpg`)} alt="Foto de Producto" /> */}
                <p className='nombre-producto'>{producto.nombre}</p>
                <p className='precio-producto'>${producto.precio}</p>
                <ItemCount />
                <button onClick={comprado} className='boton-agregar'>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail