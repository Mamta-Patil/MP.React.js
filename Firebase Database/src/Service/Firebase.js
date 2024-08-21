// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw8EFcOFkA3Xgsyf-QBMV8039nexdPYVQ",
  authDomain: "authentication-a4443.firebaseapp.com",
  projectId: "authentication-a4443",
  storageBucket: "authentication-a4443.appspot.com",
  messagingSenderId: "12212512819",
  appId: "1:12212512819:web:554a3d9ce936ea9798db46",
  measurementId: "G-8W52HRD3DC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

