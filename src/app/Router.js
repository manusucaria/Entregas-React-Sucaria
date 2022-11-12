import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import ItemListContainer from "../pages/ItemListContainer";
import Layout from "./Layout";
import Cart from "../pages/Cart";
import Nosotros from "../pages/Nosotros";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} path={process.env.PUBLIC_URL}>
                <Route index element={<ItemListContainer />}/>
                <Route path="productos" element={<ItemListContainer />}/>
                <Route path="productos/:idTipo" element={<ItemListContainer />}/>
                <Route path="productos/item" element={<ItemDetailContainer />}/>
                <Route path="productos/item/:idProducto" element={<ItemDetailContainer />}/>
                <Route path="cart" element={<Cart />}/>
                <Route path="nosotros" element={<Nosotros />}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;