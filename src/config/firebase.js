// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpq-JyUOnNaCQGcgkSw0Z48ZjH-exidao",
  authDomain: "sherize-web.firebaseapp.com",
  projectId: "sherize-web",
  storageBucket: "sherize-web.firebasestorage.app",
  messagingSenderId: "251215904596",
  appId: "1:251215904596:web:0fb373413741f2c48692c1",
  measurementId: "G-6J5K77TWCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);