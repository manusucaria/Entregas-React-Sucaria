import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where } from "firebase/firestore";
import { db } from './firebase';

// CREATE
export const createPedido = async(obj) => {
    const colRef = collection(db, 'pedidos');
    console.log(obj)
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'items');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getProducts= async ()  => {
    const colRef = collection(db, 'productos');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getProductsByCategory = async (IdTipo) => {
    const colRef = collection(db, 'productos');
    const result = await getDocs(query(colRef, where('tipo', '==', IdTipo)));
    return getArrayFromCollection(result);
}

export const getProductById = async (idProducto) => {
    const colRef = collection(db, 'productos');
    const result = await getDoc(doc(colRef, idProducto));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'items');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}