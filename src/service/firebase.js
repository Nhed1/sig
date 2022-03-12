import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBqmgjsbHlyMe0hzwB1MzHUWCAU6r6QxG0",
  authDomain: "sig-undb.firebaseapp.com",
  projectId: "sig-undb",
  storageBucket: "sig-undb.appspot.com",
  messagingSenderId: "250701252968",
  appId: "1:250701252968:web:125e86f7d9ef95f10baedd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  return currentUser;
}

export function logout() {
  return signOut(auth);
}
