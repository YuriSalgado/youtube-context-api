import React, { createContext } from 'react'

import useAuth from './hooks/userAuth';

const Context = createContext();

function AuthProvider({ children }) {

    const { 
        loading, authenticated, handleLogin, handleLogout 
    } = useAuth();

    return (
        <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider};