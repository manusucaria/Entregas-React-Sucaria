import '../styles/ItemListContainer.css';
import ItemList from '../componentes/ItemList';
import { getProductos } from '../services/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/ItemListContainer.css';
import fotoPortada1 from '../assets/img/portada/portada1.jpg';
import fotoPortada2 from '../assets/img/portada/portada2.jpg';
import fotoPortada3 from '../assets/img/portada/portada3.jpg';
import fotoPortada4 from '../assets/img/portada/portada4.jpg';
import fondoHero from '../assets/img/portada/hero.jpg'

const Home = () => {
    const [productos, setProductos] = useState([]);
    const {idTipo} = useParams();
    useEffect(() => {
        getProductos(idTipo).then(data => {
            setProductos(data)
        })
    }, [idTipo]);
    return (
        <div>
            <div className='contenedor-hero'>
                <h1 className='titulo-home'>Bienvenidos</h1>
                <div className='hero'>
                    <img className='foto-hero' src={fondoHero} alt="Foto Hero" />
                    <hr className='linea1'/>
                    <hr className='linea2'/>
                    <hr className='linea3'/>
                    <hr className='linea4'/>
                    <hr className='linea5'/>
                    <hr className='linea6'/>
                    <hr className='linea7'/>
                    <hr className='linea8'/>
                    <hr className='linea9'/>
                    <hr className='linea10'/>
                    <img className='imagen-1' src={fotoPortada1} alt="Foto Portada 1" />
                    <img className='imagen-2' src={fotoPortada2} alt="Foto Portada 2" />
                    <img className='imagen-3' src={fotoPortada3} alt="Foto Portada 3" />
                    <img className='imagen-4' src={fotoPortada4} alt="Foto Portada 4" />
                    <div className='textos'>
                        <h2 className='titulo-hero'>Dulce Capricho</h2>
                        <p className='parrafo-hero'>Somos una Empresa con mas de 20 años de experiencia en la elaboración de los mas finos productos de pasteleria artesanal. Ubicados en el barrio de Belgrano, contamos con una amplia gama de variedades de productos de la mas alta calidad.</p>
                    </div>
                </div>
            </div>
            <h3 className='titulo-productos'>Productos</h3>
            <div className='categorias'>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos/budines'}>Budines</Link>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos/tortas'}>Tortas</Link>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos'}>Todas</Link>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos/galletas'}>Galletas</Link>
                <Link className='listas-categorias' to={process.env.PUBLIC_URL + '/productos/muffins'}>Muffins</Link>
            </div>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default Home