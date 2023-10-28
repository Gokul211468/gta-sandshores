import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOVFvERrCo_EfrTEHY8OvJIPAaZ0ZSClU",
  authDomain: "fir-crud-e3a6c.firebaseapp.com",
  projectId: "fir-crud-e3a6c",
  storageBucket: "fir-crud-e3a6c.appspot.com",
  messagingSenderId: "848162432382",
  appId: "1:848162432382:web:3fbddc29d2d36a363aff2f",
  measurementId: "G-V52QH3LXFD"
};

const app = initializeApp(firebaseConfig);

export const db  = getFirestore(app); 