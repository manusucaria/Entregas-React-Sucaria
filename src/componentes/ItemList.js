import Item from './Item';
import "../styles/ItemList.css";

const ItemList = ({productos}) => {
    return (
        <div className='contenedor-signos'>
            {productos.map( (producto, i) =>
                <Item
                    producto = {producto}
                    key={i}
                />
            )}
        </div>
    )
}

export default ItemList