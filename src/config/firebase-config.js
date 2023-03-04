import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDe1oT7WfBDXmv5smymNg3iTJya0yVJoM",
  authDomain: "openminds-73317.firebaseapp.com",
  projectId: "openminds-73317",
  storageBucket: "openminds-73317.appspot.com",
  messagingSenderId: "935486072369",
  appId: "1:935486072369:web:7ded318ab8ff5c922ad710"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();