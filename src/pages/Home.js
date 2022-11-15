import ItemList from '../componentes/ItemList';
import { getProductos } from '../services/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import fotoPortada1 from '../assets/img/portada/portada1.jpg';
import fotoPortada2 from '../assets/img/portada/portada2.jpg';
import fotoPortada3 from '../assets/img/portada/portada3.jpg';
import fotoPortada4 from '../assets/img/portada/portada4.jpg';
import fondoHero from '../assets/img/portada/hero.jpg';
import video from '../assets/video/inicio.mp4';

const Home = () => {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.6073495448654!2d-58.461680084175725!3d-34.56349576287922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d44ef9dccd%3A0xe5491728baf96b83!2sMoldes%202101-2199%2C%20C1428CRG%20CABA!5e0!3m2!1ses-419!2sar!4v1668438267261!5m2!1ses-419!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }
    const [productos, setProductos] = useState([]);
    const {idTipo} = useParams();
    useEffect(() => {
        getProductos(idTipo).then(data => {
            setProductos(data)
        })
    }, [idTipo]);
    let videoInicio = <video className='video-inicio' loop autoPlay muted>
                        <source src={video} type="video/mp4" />
                    </video>;
    return (
        <div>
            {videoInicio}
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
            <div className='categorias-home'>
                <Link className='listas-categorias-home' to={process.env.PUBLIC_URL + '/productos/budines'}>Budines</Link>
                <Link className='listas-categorias-home' to={process.env.PUBLIC_URL + '/productos/tortas'}>Tortas</Link>
                <Link className='listas-categorias-home' to={process.env.PUBLIC_URL + '/productos'}>Todas</Link>
                <Link className='listas-categorias-home' to={process.env.PUBLIC_URL + '/productos/galletas'}>Galletas</Link>
                <Link className='listas-categorias-home' to={process.env.PUBLIC_URL + '/productos/muffins'}>Muffins</Link>
            </div>
            <ItemList productos = {productos}/>
            <div className='contenedor-iframe'>
                <h3 className='titulo-iframe'>Encontrános</h3>
                <Iframe className="iframe" iframe={iframe} />,
            </div>
        </div>
    )
}

export default Home