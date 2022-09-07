import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA3-lG4LQ6TG5lbx2XaaTzd_W3DP6MInoc",
    authDomain: "ushopwedrop-dev.firebaseapp.com",
    databaseURL: "https://ushopwedrop-dev-default-rtdb.firebaseio.com",
    projectId: "ushopwedrop-dev",
    storageBucket: "ushopwedrop-dev.appspot.com",
    messagingSenderId: "611420851715",
    appId: "1:611420851715:web:79005b16306a0398b80836",
    measurementId: "G-PXEH9EJPSM"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export  {db, auth};


