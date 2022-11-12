const products = [
    {
        id: 1,
        tipo: "tortas",
        nombre: "Lemon Pie",
        imagen: "lemon",
        precio: "$700 (por porción)"
    },
    {
        id: 2,
        tipo: "budines",
        nombre: "Budin de Chocolate",
        imagen: "budinchocolate",
        precio: "$900"
    },
    {
        id: 3,
        tipo: "tortas",
        nombre: "Milhojas",
        imagen: "milhojas",
        precio: "$700 (por porción)"
    },
    {
        id: 4,
        tipo: "tortas",
        nombre: "Chocotorta",
        imagen: "chocotorta",
        precio: "$690 (por porción)"
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
