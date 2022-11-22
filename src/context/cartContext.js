import { useContext } from 'react';
import {createContext,useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { createPedido } from '../app/api';

const MySwal = withReactContent(Swal);
export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

const notifyterminarCompra = () => {
    MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra Finalizada',
        showConfirmButton: false,
        timer: 1500
    });
}
const notifyEliminarProducto = () => toast.error('Producto Eliminado!', {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
const notifyAgregarProducto = () => toast.dark('Producto Agregado!', {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
const notifyEliminarTodo = () => toast.error('Carrito Vacío!', {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
const CartContext = ({ children }) =>{
    const [state,setState] = useState([]);
    const addToCart = (producto, contador) => {
        notifyAgregarProducto();
        const productoNuevo = {...producto, cantidad:contador};
        state.find(prod => prod.id === productoNuevo.id) ? sumarCantidad() : setState([...state, productoNuevo]);
        function sumarCantidad () {
            const duplicado = state.find(prod => prod.id === producto.id);
            duplicado.cantidad = productoNuevo.cantidad + duplicado.cantidad;
            setState([...(state.filter(prod => prod.id !== producto.id)), duplicado])
        }
    };
    const eliminarTodo = () => {
        notifyEliminarTodo();
        setState([])
    };
    const eliminarProducto = (producto) => {
        notifyEliminarProducto();
        setState(state.filter(p => p.id !== producto.id))
    };
    const terminarCompra = () => {
        const pedidoFinal = [];
        state.map((producto) => {
            const pedido = {nombre: producto.nombre, precio: producto.precio * producto.cantidad, cantidad:producto.cantidad};
            pedidoFinal.push(pedido)
        });
        const cliente = {nombre:"Juan Rodriguez", telefono:"12312312", email:"juanro@gmail.com"};
        createPedido({pedidoFinal, cliente});
        notifyterminarCompra();
        setState([])
    }
    return (
        <AppContext.Provider value={{state, setState, addToCart, eliminarTodo, eliminarProducto, terminarCompra}}>
            {children}
        </AppContext.Provider>
    );
}

export default CartContext;