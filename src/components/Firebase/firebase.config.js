// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5H-zeN6lHjrqr54THFajDivytW7Z4ytQ",
  authDomain: "beauty-parlor-ecc9a.firebaseapp.com",
  projectId: "beauty-parlor-ecc9a",
  storageBucket: "beauty-parlor-ecc9a.firebasestorage.app",
  messagingSenderId: "1015653216527",
  appId: "1:1015653216527:web:5b80d39b076363c60f4e7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;