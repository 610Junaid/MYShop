
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDqLkBxg9XsfsLCtDY_A-jGmkiPUTisyWU",
  authDomain: "myshop-b401a.firebaseapp.com",
  projectId: "myshop-b401a",
  storageBucket: "myshop-b401a.appspot.com",
  messagingSenderId: "371635022307",
  appId: "1:371635022307:web:2b12386ec27219e0f998d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
const auth = getAuth(app);

const db = getFirestore(app)

export {app,auth,db}