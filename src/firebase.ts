// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKvER99bOdtGinAk1N7nmqQcfTq-vbTaY",
    authDomain: "coffee-59097.firebaseapp.com",
    projectId: "coffee-59097",
    storageBucket: "coffee-59097.appspot.com",
    messagingSenderId: "58797267415",
    appId: "1:58797267415:web:50319b9b7e808352325392"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// export const db = firebase.firestore
