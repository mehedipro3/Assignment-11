import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState([]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
}

  const signinWithGoogle = () =>{
    setLoading(true);
    return  signInWithPopup(auth , googleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('state captured', currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  }, [])
  const authInfo = {
    user,
    loading,
    createUser,
    setUser,
    signinWithGoogle,
    signInUser,
    signOutUser,
    setLoading,
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;