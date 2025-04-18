import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyAIZpI2SpwQXMbvJxkytxSmsbDS5oc0Acg",
  authDomain: "carrentals-19b2d.firebaseapp.com",
  projectId: "carrentals-19b2d",
  storageBucket: "carrentals-19b2d.firebasestorage.app",
  messagingSenderId: "985581282469",
  appId: "1:985581282469:web:34129f5a9732680617194c",
  measurementId: "G-XNSGDNS6YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db=getDatabase(app)