// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAMSRLpBK7fBRyXonR5OqBXqYwE3Vl9zI",
    authDomain: "portfolio-71b62.firebaseapp.com",
    projectId: "portfolio-71b62",
    storageBucket: "portfolio-71b62.appspot.com",
    messagingSenderId: "1057830316144",
    appId: "1:1057830316144:web:f286c3a8d01f4de3792cb5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
