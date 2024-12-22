// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "expense-29e87.firebaseapp.com",
  projectId: "expense-29e87",
  storageBucket: "expense-29e87.firebasestorage.app",
  messagingSenderId: "282330275581",
  appId: "1:282330275581:web:ed7744ef090e89290fa894",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
