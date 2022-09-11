import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAA3BegziyNrDwdJ-iVqoeX5yhVjMNb4iI",
    authDomain: "drshop-88ae9.firebaseapp.com",
    projectId: "drshop-88ae9",
    storageBucket: "drshop-88ae9.appspot.com",
    messagingSenderId: "914362218566",
    appId: "1:914362218566:web:eba0ddb2a8522518daf247",
    measurementId: "G-Y5RC0YZ2VE"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };


