/*import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyBrYmpFq8bk2y_xSxWxFRH88KBelEQ-fi4",
    authDomain: "jfpet-2dca5.firebaseapp.com",
    projectId: "jfpet-2dca5",
    storageBucket: "jfpet-2dca5.appspot.com",
    messagingSenderId: "60516880979",
    appId: "1:60516880979:web:5d9f948aca1b9a28862ca6"
};

if (!firebase.app.lenght) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;*/





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrYmpFq8bk2y_xSxWxFRH88KBelEQ-fi4",
    authDomain: "jfpet-2dca5.firebaseapp.com",
    projectId: "jfpet-2dca5",
    storageBucket: "jfpet-2dca5.appspot.com",
    messagingSenderId: "60516880979",
    appId: "1:60516880979:web:5d9f948aca1b9a28862ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;