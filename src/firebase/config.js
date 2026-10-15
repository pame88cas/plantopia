// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

//⚠️Esto no deberia compartirse en un proyecto real
//📚En este proyecto educativo, por simplicidad, lo utilizamos asi
//👉A futuro lo reemplazarían por variables de entorno y archivo .env😉
const firebaseConfig = {
  apiKey: "AIzaSyDcCXuSn2F7sFI9lNfcJG0BF2aQESd-Ejc",
  authDomain: "plantopia-tp.firebaseapp.com",
  projectId: "plantopia-tp",
  storageBucket: "plantopia-tp.firebasestorage.app",
  messagingSenderId: "684242837906",
  appId: "1:684242837906:web:79aa661584f7b42764214b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
