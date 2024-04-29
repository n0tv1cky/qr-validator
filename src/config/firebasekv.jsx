import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzMkdkZ5c6rnyEji-KuxaRIV48ikI0raY",
  authDomain: "kvscl-26ef2.firebaseapp.com",
  //databaseURL: "https://kvscl-26ef2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kvscl-26ef2",
  storageBucket: "kvscl-26ef2.appspot.com",
  messagingSenderId: "765224443960",
  appId: "1:765224443960:web:16ab4a95d0c2b02a2c06cd",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export default firestore;
