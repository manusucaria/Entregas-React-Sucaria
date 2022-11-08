const products = [
    {
        id: "1",
        tipo: "torta",
        nombre: "Lemon Pie",
        imagen: "lemon",
        precio: "$700 (por porción)"
    },
    {
        id: "2",
        tipo: "budin",
        nombre: "Budin de Chocolate",
        imagen: "budinchocolate",
        precio: "$900"
    },
    {
        id: "3",
        tipo: "torta",
        nombre: "Milhojas",
        imagen: "milhojas",
        precio: "$700 (por porción)"
    },
    {
        id: "4",
        tipo: "torta",
        nombre: "Chocotorta",
        imagen: "chocotorta",
        precio: "$690 (por porción)"
    }
]
export const getProductos = () => {
    const task = new Promise((resolve, reject) => {
        resolve(products)
    });
    return task
};