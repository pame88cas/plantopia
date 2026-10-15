import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

//Todas las funciones van a utilizar esta coleccion.
//La hacemos global y que todas la usen en vez de definirla varias veces
// Creamos la referencia a la coleccion: en nuestro caso se llama "products"
const productsRef = collection(db, "products");

/* -------------------------------------------------------------------------- */
/*                               TRAER PRODUCTOS                              */
/* -------------------------------------------------------------------------- */
export const getProducts = async () => {
  try {
    //Esto no nos da el objeto de producto directo,
    // sino un tipo especial de firestore. Seria como una "foto" de lo que hay
    //al momento, mas otras cosas. Es un "QuerySnapshot"
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;
  } catch (error) {
    console.log("Error al traer productos", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                            TRAER PRODUCTO POR ID                           */
/* -------------------------------------------------------------------------- */
// Funcion que SOLO pide un dato
export const getProductById = async (id) => {
  try {
    // Creamos la referencia al documento
    const productRef = doc(productsRef, id);

    // Traemos el documento:
    const snapshot = await getDoc(productRef);

    // Verificamos si existe
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    throw error;
  }
};
