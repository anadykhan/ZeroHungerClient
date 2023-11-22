// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrzRDdCt9LcuvDJ5NKlswhXxY4LcEGQFw",
    authDomain: "zerohunger-51594.firebaseapp.com",
    projectId: "zerohunger-51594",
    storageBucket: "zerohunger-51594.appspot.com",
    messagingSenderId: "338433035421",
    appId: "1:338433035421:web:0b5781878edeec91ebd874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app