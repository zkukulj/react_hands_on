import React,{ useState,createContext } from "react";
const AuthContext = createContext();

const AuthProvider =({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>{children}</AuthContext.Provider>
    )
}

const AuthConsumer = AuthContext.Consumer;

export {AuthContext,AuthProvider,AuthConsumer};