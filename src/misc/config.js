import { initializeApp } from "firebase/app";
import {getAuth  } from "firebase/auth"
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTPlR4TrY-YKicONJq_PeZQFLdF8siba0",
    authDomain: "tapop-95ae6.firebaseapp.com",
    projectId: "tapop-95ae6",
    storageBucket: "tapop-95ae6.appspot.com",
    messagingSenderId: "650204730441",
    appId: "1:650204730441:web:2c260102a2fa16cf595b98"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app)
const storage = getStorage(app)
export {auth,storage}
 



