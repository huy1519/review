import { createContext, useContext, useState } from "react";


const AuthContext = createContext();
function AuthProvider(props) {
    const [email, setEmail] = useState({});
    const value = {email, setEmail};
    return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext);
    if (typeof context === "undefined") throw new Error('useAuth must be used within AuthProvider');
    return context;
}

export {AuthProvider, useAuth};