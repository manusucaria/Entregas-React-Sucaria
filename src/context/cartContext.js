import { useContext } from 'react';
import {createContext,useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

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
const notifyCompraFinalizada = () => toast.error('Compra Finalizada!', {
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
    const compraFinalizada = () => {
        notifyCompraFinalizada();
        setState([])
    };
    return (
        <AppContext.Provider value={{state, setState, addToCart, eliminarTodo, eliminarProducto, compraFinalizada}}>
            {children}
        </AppContext.Provider>
    );
}

export default CartContext;