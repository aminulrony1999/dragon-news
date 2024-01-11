import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const newUser = (email, password) =>
  {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  }
  const logIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
    setLoading(true);
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
  const authInfo = {
    user,
    setUser,
    newUser,
    logIn,
    logOut,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
