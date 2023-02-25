import React, { useContext, useState, useEffect, useRef } from "react"
import { auth, db } from "../firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { async } from "@firebase/util"


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const userInfo = useRef()

    async function signup(email, password) {
        await createUserWithEmailAndPassword(auth, email, password)
        return
    }

    async function login(email, password) {
        await signInWithEmailAndPassword(auth, email, password)
        return
    }

    function logout() {
        return signOut(auth)
    }

    // now you can do this for all the other function like reset password or update password

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        userInfo
    }

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}