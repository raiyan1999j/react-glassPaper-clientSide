// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9zjUqg95Ecdij1oTXs2lMCmDnNtEARiY",
  authDomain: "client-side-2954a.firebaseapp.com",
  projectId: "client-side-2954a",
  storageBucket: "client-side-2954a.appspot.com",
  messagingSenderId: "846108608988",
  appId: "1:846108608988:web:c4badae9752f49d9772719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireAuth = getAuth(app);

export const storage = getStorage(app);
export default fireAuth;