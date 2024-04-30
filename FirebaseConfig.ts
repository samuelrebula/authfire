// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnHW7oBJdfP59LPRTgMp6Pz9If1aFSvpk",
  authDomain: "rnauth-85aab.firebaseapp.com",
  projectId: "rnauth-85aab",
  storageBucket: "rnauth-85aab.appspot.com",
  messagingSenderId: "36196475560",
  appId: "1:36196475560:web:8667a474e709430747589d",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
