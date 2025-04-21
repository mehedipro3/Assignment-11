import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';
import axios from 'axios';



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
      console.log('state captured : ', currentUser?.email);


      if(currentUser?.email) {
        const user = { email : currentUser.email};

        axios.post('https://library-server-khaki.vercel.app/jwt', user, {
          withCredentials: true,
        })
        .then(res => {
          console.log('JWT response:', res.data);
          setLoading(false);
        })
        .catch(err => console.error('JWT fetch error:', err));
      }
      else{
        axios.post('https://library-server-khaki.vercel.app/logout',{},{
          withCredentials: true,
        })
        .then(res =>{
          console.log('Logout response:', res.data);
          setLoading(false);
        })
      }
     
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