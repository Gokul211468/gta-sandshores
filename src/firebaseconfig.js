import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEtbc4ZbBPEW0sZIwQd7u4K8W2IEds_qc",
  authDomain: "work-allocation-6dfd3.firebaseapp.com",
  projectId: "work-allocation-6dfd3",
  storageBucket: "work-allocation-6dfd3.appspot.com",
  messagingSenderId: "666033300453",
  appId: "1:666033300453:web:690d7791d7656fcfaa050c",
  measurementId: "G-EP8MPTSFCS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();