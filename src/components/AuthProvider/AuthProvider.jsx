import React, { createContext, useEffect, useState } from 'react'
import {  createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(app);


    const register = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(CurrentUser) => {
            setUser(CurrentUser)
            setIsLoading(false)
        })
        return ()=>{
            unsubscribe()
        } 
    },[])

    const AuthInfo = {
        register,
        user,
        isLoading,
    }
  return (
    <div>
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider