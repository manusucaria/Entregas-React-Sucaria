const products = [
    {
        id: "1",
        nombre: "Lemon Pie",
        imagen: "lemon",
        precio: "$700 (por porción)"
    },
    {
        id: "2",
        nombre: "Budin de Chocolate",
        imagen: "budinchocolate",
        precio: "$900"
    },
    {
        id: "3",
        nombre: "Milhojas",
        imagen: "milhojas",
        precio: "$700 (por porción)"
    },
    {
        id: "4",
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