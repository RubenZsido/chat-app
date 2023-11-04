import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfxKUGW9GMOmG-SLD6wzPqY2PCOkAWqgk",
  authDomain: "chat-app-a4d5c.firebaseapp.com",
  projectId: "chat-app-a4d5c",
  storageBucket: "chat-app-a4d5c.appspot.com",
  messagingSenderId: "752782266768",
  appId: "1:752782266768:web:9ff4dbe5b5653e5fb96315",
  measurementId: "G-TK84TJPJ50",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();

const signIn = async () => {
  const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
  return userCred;
};
const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
export { auth, provider, signIn, logOut };
