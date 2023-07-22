// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:import.meta.env.VITE_apiKey,
    authDomain:import.meta.env.VITE_authDomain,
    projectId:import.meta.env.VITE_projectId,
    storageBucket:import.meta.env.VITE_storageBucket,
    messagingSenderId:import.meta.env.VITE_messagingSenderId,
    appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// apiKey: "AIzaSyBD0aF5dGadosermB8LBvHYTQKw94bUI5U",
// authDomain: "agragati-society.firebaseapp.com",
// projectId: "agragati-society",
// storageBucket: "agragati-society.appspot.com",
// messagingSenderId: "35073038676",
// appId: "1:35073038676:web:ea3a76a868ddc906c7d0c1"