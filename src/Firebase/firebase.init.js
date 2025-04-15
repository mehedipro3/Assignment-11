// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg8EyGAJq9lvqUThq7k4M964NsK6uAMco",
  authDomain: "library-management-syste-f5bfb.firebaseapp.com",
  projectId: "library-management-syste-f5bfb",
  storageBucket: "library-management-syste-f5bfb.firebasestorage.app",
  messagingSenderId: "165307272026",
  appId: "1:165307272026:web:ed6f5cc9a0d82800d48163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);