import Item from './Item';
import "../styles/ItemList.css";

const ItemList = ({productos}) => {
    return (
        <div className='contenedor-signos'>
            {productos.map( (producto) =>
                <Item
                    producto = {producto}
                    key={producto.id}
                />
            )}
        </div>
    )
}

export default ItemList