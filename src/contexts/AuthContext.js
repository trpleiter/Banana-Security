import React, {createContext, useState} from 'react';
import {useHistory} from 'react-router-dom';

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const history = useHistory();
    const [isAuth, toggleIsAuth] = useState({isAuth: false, user: ''});

    function toggleSignIn(data) {
        if (isAuth.isAuth === false) {
            toggleIsAuth({isAuth:true, user: data});
        }
        console.log("Gebruiker is ingelogd!");
        history.push('/profile');
    }

    function toggleLogout () {
        if (isAuth.isAuth === true) {
            toggleIsAuth({isAuth:false, user: ''});
        }
        console.log("Gebruiker is uitgelogd!");
        history.push('/');
    }

    const data = {
        loggedIn: isAuth.isAuth,
        signIn: toggleSignIn,
        user: isAuth.user,
        logOut: toggleLogout
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;