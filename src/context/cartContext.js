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
const CartContext = ({ children }) =>{
    const [state,setState] = useState([]);
    let [estadoBoton, setEstadoBoton] = useState(0)

    const addToCart = (producto) => {
        notifyAgregarProducto();
        setEstadoBoton(1);
        const duplicado = state.find(prod => prod.id === producto.id);
        duplicado?sumarCantidad():agregarProd();
        function sumarCantidad () {
            state.splice(state.indexOf(duplicado), 1);
            producto.cantidad = producto.cantidad + duplicado.cantidad;
            state.push(producto);
            setState(state)
        }
        function agregarProd () {
            setState([...state, producto]);
        }
    };
    const eliminarTodo = () => {
        notifyEliminarTodo();
        setEstadoBoton(0);
        if(state.length >= 1){
            setState([])
        }else{
            return
        }
    };
    const eliminarProducto = (producto) => {
        setEstadoBoton(0);
        notifyEliminarProducto();
        setState(state.filter(p => p.id !== producto.id))
    };
    return (
        <AppContext.Provider value={{state, setState, addToCart, eliminarTodo, eliminarProducto, estadoBoton}}>
            {children}
        </AppContext.Provider>
    );
}

export default CartContext;