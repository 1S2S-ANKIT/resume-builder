import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA74KxfmiCnkHIbogJzIFFUT8pHc2mwtZc",
  authDomain: "resume-1313f.firebaseapp.com",
  projectId: "resume-1313f",
  storageBucket: "resume-1313f.appspot.com",
  messagingSenderId: "604914874310",
  appId: "1:604914874310:web:652668eed5cbbbdf4e24c7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider, db, storage };
