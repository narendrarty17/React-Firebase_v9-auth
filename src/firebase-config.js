// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4BSSMLwlU_pI_QWDSyQAobsiVerichcI",
  authDomain: "react-firebase-v9-5ab5d.firebaseapp.com",
  projectId: "react-firebase-v9-5ab5d",
  storageBucket: "react-firebase-v9-5ab5d.appspot.com",
  messagingSenderId: "658300239115",
  appId: "1:658300239115:web:f5e6a9620cfe5faff6b60e",
  measurementId: "G-5ZVZBNZDL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);