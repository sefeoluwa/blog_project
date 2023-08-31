// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUaxRpYo2DC0YQ0yUJzinMh4rYlmSJd6o",
  authDomain: "resume-matcher-blog.firebaseapp.com",
  projectId: "resume-matcher-blog",
  storageBucket: "resume-matcher-blog.appspot.com",
  messagingSenderId: "173937424874",
  appId: "1:173937424874:web:0fa06102124ca1992dda93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();