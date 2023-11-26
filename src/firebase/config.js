import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDwSt0n0q8W2T-9VAwbNnle1q71AJ-3M4",
  authDomain: "primer-react-8ee77.firebaseapp.com",
  projectId: "primer-react-8ee77",
  storageBucket: "primer-react-8ee77.appspot.com",
  messagingSenderId: "474967486762",
  appId: "1:474967486762:web:f9cfefceb471b2188c6e53"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);