// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsLp1PX94ftxdbIDVt5e-6fzhoOQWwAN8",
  authDomain: "shareable-7f777.firebaseapp.com",
  projectId: "shareable-7f777",
  storageBucket: "shareable-7f777.appspot.com",
  messagingSenderId: "165882567372",
  appId: "1:165882567372:web:f9b09edc3c7f3f0a764069",
  measurementId: "G-TGGCQL9NBV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
