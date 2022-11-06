import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import ItemListContainer from "../pages/ItemListContainer";
import Layout from "./Layout";
import Cart from "../pages/Cart";
import Nosotros from "../pages/Nosotros";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index path="/Entregas-React-Sucaria" element={<ItemListContainer />}/>
                <Route path="/Entregas-React-Sucaria/itemdetailcontainer" element={<ItemDetailContainer />}/>
                <Route path="/Entregas-React-Sucaria/Cart" element={<Cart />}/>
                <Route path="/Entregas-React-Sucaria/Nosotros" element={<Nosotros />}/>
                                <Route path="/Entregas-React-Sucaria/item/:id" element={<ItemDetailContainer />}/>

            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;