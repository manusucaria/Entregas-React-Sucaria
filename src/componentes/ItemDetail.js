import Item from './Item';
import '../styles/ItemDetail.css';

const ItemDetail = ({productos}) => {
    return (
        <div className='contenedor-signos-detail'>
            {productos.map( (producto, i) =>
                <Item
                    producto = {producto}
                    key={i}
                />
            )}
        </div>
    )
}

export default ItemDetail