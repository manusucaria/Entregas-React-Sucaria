
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
    const [state, setState] = useMyContext([]);
    let comprado = () => {
        const pedidoNuevo = new Pedido(producto.id, producto.tipo, producto.nombre, producto.imagen, 1, producto.precio);
        const pedidos = state?state:[];
        const duplicado = pedidos.find(producto => producto.id === pedidoNuevo.id);
        duplicado?sumarCantidad():agregarProd();
        function sumarCantidad () {
            pedidos.splice(state.indexOf(duplicado), 1);
            const prodFinal = new Pedido(producto.id, producto.tipo, producto.nombre, producto.imagen, pedidoNuevo.cantidad + duplicado.cantidad, producto.precio)
            pedidos.push(prodFinal);
            setState(pedidos)
        }
        function agregarProd () {
            pedidos.push(pedidoNuevo);
            setState(pedidos);
        }
    }
    return (
        <div className='producto-detail'>
            <div className='datos-producto-detail'>
                {/* <img className='imagen-producto-detail' src={require(`../assets/img/productos/${producto.imagen}.jpg`)} alt="Foto de Producto" /> */}
                <p className='nombre-producto-detail'>{producto.nombre}</p>
                <p className='precio-producto-detail'>${producto.precio}</p>
                <ItemCount />
                <button onClick={comprado} className='boton-agregar-detail'>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail