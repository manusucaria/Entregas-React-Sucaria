import  Navbar  from "../componentes/NavBar.js";
import  {Outlet}  from "react-router-dom";
import  Footer  from "../componentes/Footer.js";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;