import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const newUser = (email, password) =>
  {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const logIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(loggedUser)=>{
      setUser(loggedUser);
    })
    return ()=>{
      return unsubscribe;
    }
  },[])
  const authInfo = {
    user,
    setUser,
    newUser,
    logIn
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
