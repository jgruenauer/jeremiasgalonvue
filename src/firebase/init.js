import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyClvKTSVUd5GWhvLhb6ngX_MRtKNM5NP9w",
    authDomain: "jeremiasgalon-webpage.firebaseapp.com",
    projectId: "jeremiasgalon-webpage",
    storageBucket: "jeremiasgalon-webpage.appspot.com",
    messagingSenderId: "791286521892",
    appId: "1:791286521892:web:72531dfd9af51b610c38b1",
    measurementId: "G-QR82M5FF8G"
}

//const app = 
initializeApp(firebaseConfig)

const db = getFirestore()
export default db;