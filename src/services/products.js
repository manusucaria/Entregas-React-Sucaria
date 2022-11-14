const products = [
    {
        id: 1,
        tipo: "tortas",
        nombre: "Porción de Lemon Pie",
        imagen: "lemon",
        precio: 700
    },
    {
        id: 2,
        tipo: "budines",
        nombre: "Budin de Chocolate",
        imagen: "budinchocolate",
        precio: 900
    },
    {
        id: 3,
        tipo: "tortas",
        nombre: "Porción de Milhojas",
        imagen: "milhojas",
        precio: 700
    },
    {
        id: 4,
        tipo: "tortas",
        nombre: "Porción de Chocotorta",
        imagen: "chocotorta",
        precio: 690
    },
    {
        id: 5,
        tipo: "galletas",
        nombre: "Galleta de Vainilla/Chocolate",
        imagen: "galletavainilla",
        precio: 250
    },
    {
        id: 6,
        tipo: "galletas",
        nombre: "Galleta de Almendra",
        imagen: "galletaalmendra",
        precio: 250
    },
    {
        id: 7,
        tipo: "budines",
        nombre: "Budin Salado de Vegetales",
        imagen: "budinsalado",
        precio: 950
    },
    {
        id: 8,
        tipo: "tortas",
        nombre: "Porción de Torta de Frutilla",
        imagen: "tortafrutilla",
        precio: 700
    },
    {
        id: 9,
        tipo: "tortas",
        nombre: "Brownie",
        imagen: "brownie",
        precio: 350
    },
    {
        id: 10,
        tipo: "muffins",
        nombre: "Muffin con Chips",
        imagen: "muffin",
        precio: 450
    },
    {
        id: 11,
        tipo: "muffins",
        nombre: "Muffin de Chocolate",
        imagen: "muffinchocolate",
        precio: 450
    }
]
export const getProducto = (idProducto) => {
    const task = new Promise((resolve, reject) => {
        resolve(products.find(prod => prod.id === Number(idProducto)))
    });
    return task
};
export const getProductos = (idTipo) => {
    const task = new Promise((resolve, reject) => {
        resolve(idTipo?products.filter(prod => prod.tipo === idTipo):products)
    });
    return task
};
