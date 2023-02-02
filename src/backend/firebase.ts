// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBELptno7o_dNsvSkXPhbYTEN7hGyS6yBA",
  authDomain: "ride-sharing-app-c1c4c.firebaseapp.com",
  projectId: "ride-sharing-app-c1c4c",
  storageBucket: "ride-sharing-app-c1c4c.appspot.com",
  messagingSenderId: "383271351296",
  appId: "1:383271351296:web:7e92b41fbd9dac73e254e5",
  measurementId: "G-XWHH27CHJW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db as firebaseDb, auth as firebaseAuth };
