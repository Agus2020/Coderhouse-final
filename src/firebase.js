import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg6nkTJEWwwoD8rJoWRwTkt8b5Qu-nXkk",
  authDomain: "comision-34790-c3817.firebaseapp.com",
  projectId: "comision-34790-c3817",
  storageBucket: "comision-34790-c3817.appspot.com",
  messagingSenderId: "309414016531",
  appId: "1:309414016531:web:49c7cd1276adb5c81471e6"
};



export const app = initializeApp(firebaseConfig); //FirebaseApp 
export const db = getFirestore(app); //Firestore