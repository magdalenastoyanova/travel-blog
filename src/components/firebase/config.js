import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgcpBP9IW6V8Mj2VHUnKDMkQnAtrd7w3w",
  authDomain: "travel-blog-84940.firebaseapp.com",
  databaseURL:
    "https://travel-blog-84940-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "travel-blog-84940",
  storageBucket: "travel-blog-84940.appspot.com",
  messagingSenderId: "845324917638",
  appId: "1:845324917638:web:d98377d1640f3d4d1e2a07",
  measurementId: "G-ZPM9K9HPK8",
};

  const fb = firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();
export const db = fb.firestore();
export default firebaseConfig;
