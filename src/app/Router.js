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
                <Route path="itemdetailcontainer" element={<ItemDetailContainer />}/>
                <Route path="Cart" element={<Cart />}/>
                <Route path="Nosotros" element={<Nosotros />}/>
                <Route path="item/:id" element={<ItemDetailContainer />}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;