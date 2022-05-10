// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcjuYHAo2XXQR8rLsvT9694h-WZrWTe3Q",
  authDomain: "warehouse-inventory-5bba7.firebaseapp.com",
  projectId: "warehouse-inventory-5bba7",
  storageBucket: "warehouse-inventory-5bba7.appspot.com",
  messagingSenderId: "337551343847",
  appId: "1:337551343847:web:77790675707f1b13f26242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;