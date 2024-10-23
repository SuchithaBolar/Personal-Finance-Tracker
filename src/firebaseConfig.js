// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxShNoFBZ_HVFN-7zrlZWODqxjEjTcbvM",
  authDomain: "personal-finance-tracker-ab36d.firebaseapp.com",
  projectId: "personal-finance-tracker-ab36d",
  storageBucket: "personal-finance-tracker-ab36d.appspot.com",
  messagingSenderId: "613516625350",
  appId: "1:613516625350:web:78c9b33f8a6ed7c8b45ec7",
  measurementId: "G-EVZD6LJVS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };