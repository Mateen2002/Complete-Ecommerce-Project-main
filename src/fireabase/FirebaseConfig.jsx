// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmckJY8r23tlPwcEm87WBL6ftG_789Nl0",
  authDomain: "shoping-website-6c2df.firebaseapp.com",
  projectId: "shoping-website-6c2df",
  storageBucket: "shoping-website-6c2df.appspot.com",
  messagingSenderId: "873078466203",
  appId: "1:873078466203:web:665ed33811a214a262883e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}