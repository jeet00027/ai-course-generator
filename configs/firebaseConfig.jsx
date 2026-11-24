// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFJk56Hxw6fGtjhZlLuxjx7_fXovbHLBs",
  authDomain: "ai-course-generator-73bce.firebaseapp.com",
  projectId: "ai-course-generator-73bce",
  storageBucket: "ai-course-generator-73bce.firebasestorage.app",
  messagingSenderId: "1043639032010",
  appId: "1:1043639032010:web:2275a9a60d17430af6fc33",
  measurementId: "G-PYRQRMK43S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const analytics = typeof window !== 'undefined' ? 
  isSupported().then(yes => yes ? getAnalytics(app) : null) : 
  null;
