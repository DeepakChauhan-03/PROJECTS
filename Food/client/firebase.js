// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "drive-b2528.firebaseapp.com",
  projectId: "drive-b2528",
  storageBucket: "drive-b2528.firebasestorage.app",
  messagingSenderId: "11862332800",
  appId: "1:11862332800:web:02241800705882b1445d65",
  measurementId: "G-H9M0NLEH22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
// const analytics = getAnalytics(app);

export {app,auth}