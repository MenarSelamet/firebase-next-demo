// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDtXZejfl7effq08-t20LxYe7BXnVntmU",
  authDomain: "todo-list-aea90.firebaseapp.com",
  projectId: "todo-list-aea90",
  storageBucket: "todo-list-aea90.appspot.com",
  messagingSenderId: "159433520201",
  appId: "1:159433520201:web:061718cdab3f0db5a53b98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
