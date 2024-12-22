// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSuALV5i4DGQSjgQFy3NWbL6wrUF_vD94",
  authDomain: "initializing-firebase-7adb2.firebaseapp.com",
  projectId: "initializing-firebase-7adb2",
  storageBucket: "initializing-firebase-7adb2.firebasestorage.app",
  messagingSenderId: "220362443612",
  appId: "1:220362443612:web:e9bf1fa21931c1407d8f99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
