import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAacO3bMgIxJDyCvdep9BNoR4UQ0NSLGKk",
  authDomain: "line-clone-c224c.firebaseapp.com",
  projectId: "line-clone-c224c",
  storageBucket: "line-clone-c224c.appspot.com",
  messagingSenderId: "300684503349",
  appId: "1:300684503349:web:a8786168b3e47bb387047c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;