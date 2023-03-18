// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZaM4H9qUj7NXgZvH14K7VF5wPYwRFV78",
  authDomain: "protfolios-606e9.firebaseapp.com",
  projectId: "protfolios-606e9",
  storageBucket: "protfolios-606e9.appspot.com",
  messagingSenderId: "98349819666",
  appId: "1:98349819666:web:96914ac1d7a086657535cb",
  measurementId: "G-VYPXSNG0CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app)