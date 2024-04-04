// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdK-d8XZgkJ6iFccK8GwRiTFwMcNScL6Q",
  authDomain: "dragon-news-949c2.firebaseapp.com",
  projectId: "dragon-news-949c2",
  storageBucket: "dragon-news-949c2.appspot.com",
  messagingSenderId: "997171470157",
  appId: "1:997171470157:web:9c2706b156a7fc8a1ce104",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
