import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_JLJ42iJjtLx_tdwrqCTx_PlhjDQnq4s",
  authDomain: "web-review-c659b.firebaseapp.com",
  projectId: "web-review-c659b",
  storageBucket: "web-review-c659b.appspot.com",
  messagingSenderId: "381756086018",
  appId: "1:381756086018:web:6e8d808d5e81e662a2941b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);