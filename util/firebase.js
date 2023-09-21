// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZLGujTfjXeEWz4SCaxQmswDTy0wLpCZ0",
  authDomain: "fir-next-demo-eea3a.firebaseapp.com",
  projectId: "fir-next-demo-eea3a",
  storageBucket: "fir-next-demo-eea3a.appspot.com",
  messagingSenderId: "792076055334",
  appId: "1:792076055334:web:a8546edbff23697c8847e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
