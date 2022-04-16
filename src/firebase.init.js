// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzB_3-4ZwvpCpYUxoDAunQsDMGe6GXvv4",
  authDomain: "fitness-center-c1ee7.firebaseapp.com",
  projectId: "fitness-center-c1ee7",
  storageBucket: "fitness-center-c1ee7.appspot.com",
  messagingSenderId: "67149942591",
  appId: "1:67149942591:web:3584e9e19b6c55ff954d8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
