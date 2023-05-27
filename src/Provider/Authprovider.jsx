import { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null)
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)


    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const logOut = () => {
        setLoader(true)
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })

        return () => {
            return unSubscribe()
        }


    }, [])






    const authInfo = {
        user,
        loader,
        login,
        createUser,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;