// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4TImDa6bILnH4SfxzaF9prvWE2itrTEg",
  authDomain: "test-bf386.firebaseapp.com",
  projectId: "test-bf386",
  storageBucket: "test-bf386.appspot.com",
  messagingSenderId: "350850577521",
  appId: "1:350850577521:web:89c77b9227e5494a74d7d0",
  measurementId: "G-RG7DG02T50",
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
