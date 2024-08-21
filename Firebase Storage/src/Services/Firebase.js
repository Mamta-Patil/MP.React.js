// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARXNxthmGMNAufAOWkbIIj4IOJ67NCzYY",
  authDomain: "fir-storage-2e088.firebaseapp.com",
  projectId: "fir-storage-2e088",
  storageBucket: "fir-storage-2e088.appspot.com",
  messagingSenderId: "45593077782",
  appId: "1:45593077782:web:0e34c28b8901703e4aed37",
  measurementId: "G-MB3WTG3PE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
 
