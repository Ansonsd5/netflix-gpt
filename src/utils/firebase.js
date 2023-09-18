// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNxhE1jZ5N4WY2DjXDh_Bxm_Ef9Hsj7L0",
  authDomain: "netflix-gpt-4e981.firebaseapp.com",
  projectId: "netflix-gpt-4e981",
  storageBucket: "netflix-gpt-4e981.appspot.com",
  messagingSenderId: "236457070738",
  appId: "1:236457070738:web:fb346db902288d1549d64b",
  measurementId: "G-YPMLH812YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();