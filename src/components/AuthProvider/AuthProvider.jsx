import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import useAxiosPublic from './../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth(app);
    const axiosPublic = useAxiosPublic()


    const register = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setIsLoading(true)
        localStorage.removeItem('token')
        return signOut(auth)
    }

    const profileUpdate = (firstName, lastName) => {
        setIsLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: firstName + " " + lastName
        })
    }

    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const signInWithFacebook = () => {
        setIsLoading(true)
        return signInWithPopup(auth, FacebookProvider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser)
            console.log(CurrentUser)
            setIsLoading(false)
            //create jwt token
            if (CurrentUser) {
                axiosPublic.post('/jwt', { email: CurrentUser?.email })
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token)
                        }else{
                            localStorage.removeItem('token')
                        }
                    })
            }

        })
        return () => {
            unsubscribe()
        }
    }, [])

    const AuthInfo = {
        register,
        login,
        logOut,
        user,
        isLoading,
        profileUpdate,
        signInWithGoogle,
        signInWithFacebook
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