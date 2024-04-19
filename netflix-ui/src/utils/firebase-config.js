import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBgT3qbjdeL0gKYtgZ5iDU7b_3ipcAR7L8",
  authDomain: "react-netflix-clone-eebc8.firebaseapp.com",
  projectId: "react-netflix-clone-eebc8",
  storageBucket: "react-netflix-clone-eebc8.appspot.com",
  messagingSenderId: "508129582588",
  appId: "1:508129582588:web:c8f84304554bda661be679",
  measurementId: "G-DP9Z001KD5"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
