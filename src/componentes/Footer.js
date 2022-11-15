import "../styles/Footer.css";
import copyright from "../assets/img/copyright.ico";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="listas-footer">
                <Link to={process.env.PUBLIC_URL + "/"} className= "lista-footer">Inicio</Link>
                <Link to={process.env.PUBLIC_URL + "/productos"} className= "lista-footer">Productos</Link>
                <Link to={process.env.PUBLIC_URL + "/cart"} className= "lista-footer">Carrito</Link>
                <Link to={process.env.PUBLIC_URL + "/nosotros"} className= "lista-footer">Nosotros</Link>
            </div>
            <p className="copyright">DULCE CAPRICHO 2022 <img className="foto-copyright" src={copyright} alt="Copyright" /></p>
        </div>
    )
}

export default Footer;