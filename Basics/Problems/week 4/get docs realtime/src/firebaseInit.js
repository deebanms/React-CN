import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "test-project-559e1.firebaseapp.com",
  projectId: "test-project-559e1",
  storageBucket: "test-project-559e1.appspot.com",
  messagingSenderId: "418042337809",
  appId: "1:418042337809:web:e05f4adbfb8d9d02286fb0",
  measurementId: "G-7DTEW2E7PY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
