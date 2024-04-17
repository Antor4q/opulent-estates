import { createContext, useEffect, useState,  } from "react";
import PropTypes from "prop-types"
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const FirebaseContext = ({children}) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   const googleProvider = new GoogleAuthProvider()
   const githubProvider = new GithubAuthProvider()

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth ,email,password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth ,googleProvider)
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const profileUpdate = (name,photo) => {
       return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
          })
    }

    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            if(currentUser){
                setUser(currentUser)
                
            }
            setLoading(false)
        })
        return ()=> unsubscribe
    },[])

    const userInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleLogin,
        githubLogin,
        profileUpdate ,
        logOut
    }


    return (
       <AuthContext.Provider value={userInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default FirebaseContext;

FirebaseContext.propTypes = {
    children: PropTypes.node
}