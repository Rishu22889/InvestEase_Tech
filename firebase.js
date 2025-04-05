
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyABqgualjotxDkYaQ9uMtbRV-mQveGdL5s",
    authDomain: "invest-ease-8d7f6.firebaseapp.com",
    projectId: "invest-ease-8d7f6",
    storageBucket: "invest-ease-8d7f6.firebasestorage.app",
    messagingSenderId: "757708392550",
    appId: "1:757708392550:web:2d2f4058e6b58fcb2445a7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider};
