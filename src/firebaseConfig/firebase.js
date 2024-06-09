import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTmJT1mRvBJCjqnQCYbrGLY_ahvirqZog",
  authDomain: "carrito-61c88.firebaseapp.com",
  projectId: "carrito-61c88",
  storageBucket: "carrito-61c88.appspot.com",
  messagingSenderId: "388005174056",
  appId: "1:388005174056:web:111e332978ddd052d04e1d",
  measurementId: "G-6R3H8RJ3P2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)