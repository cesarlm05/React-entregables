// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBoDDWjLFuODh9z7k8Jl39CPZPBrLDU20",
  authDomain: "sram-28f9c.firebaseapp.com",
  projectId: "sram-28f9c",
  storageBucket: "sram-28f9c.appspot.com",
  messagingSenderId: "38229401438",
  appId: "1:38229401438:web:119d2bd73d38e432adb9cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
