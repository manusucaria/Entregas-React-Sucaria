import "../styles/Footer.css";
import copyright from "../assets/img/copyright.ico"
const Footer = () => {
    return (
        <div className="footer">
            <div className="listas-footer">
                <p className="lista-footer">Productos</p>
                <p className="lista-footer">Nosotros</p>
                <p className="lista-footer">Carrito</p>
                <p className="lista-footer">Contacto</p>
            </div>
            <p className="copyright">DULCE CAPRICHO 2022 <img className="foto-copyright" src={copyright} alt="Copyright" /></p>
        </div>
    )
}

export default Footer