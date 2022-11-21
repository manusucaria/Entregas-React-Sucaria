import { useContext } from 'react';
import {createContext,useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
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
const CartContext = ({ children }) =>{
    const [state,setState] = useState([]);
    const addToCart = (producto, contador) => {
        notifyAgregarProducto();
        producto.cantidad = Number(contador);
        state.find(prod => prod.id === producto.id) ? sumarCantidad() : agregarProd();
        function sumarCantidad () {
            const duplicado = state.find(prod => prod.id === producto.id);
            duplicado.cantidad = producto.cantidad + duplicado.cantidad;
            setState([...(state.filter(prod => prod.id !== producto.id)), duplicado])
        }
        function agregarProd () {
            setState([...state, producto]);
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
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra Finalizada',
            showConfirmButton: false,
            timer: 1500
        });
        setState([])
    }
    return (
        <AppContext.Provider value={{state, setState, addToCart, eliminarTodo, eliminarProducto, terminarCompra}}>
            {children}
        </AppContext.Provider>
    );
}

export default CartContext;