const products = [
    {
        nombre: "Lemon Pie",
        imagen: "lemon",
        precio: "$700 (por porción)"
    },
    {
        nombre: "Budin de Chocolate",
        imagen: "budinchocolate",
        precio: "$900"
    },
    {
        nombre: "Milhojas",
        imagen: "milhojas",
        precio: "$700 (por porción)"
    },
    {
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