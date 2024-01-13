import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const newUser = (email, password) =>
  {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const logIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(loggedUser)=>{
      setUser(loggedUser);
      setLoading(false);
    })
    return ()=>{
      return unsubscribe;
    }
  },[])
  const logOut = ()=>{
    return signOut(auth);
  }
  const logInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth,provider);
  }
  const authInfo = {
    user,
    setUser,
    newUser,
    logInWithGoogle,
    logIn,
    logOut,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
