import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCreye6ppWQu70ITVXuo-_9NzBqpFdRSNQ",
  authDomain: "microwebs-8bf7a.firebaseapp.com",
  projectId: "microwebs-8bf7a",
  storageBucket: "microwebs-8bf7a.firebasestorage.app",
  messagingSenderId: "534044164668",
  appId: "1:534044164668:web:7c77c954f26ea891c07939",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;