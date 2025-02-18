import React, { useReducer } from "react";
import authReducer from "./reducer/authReducer";
import AuthContext from "./context/authContext";

const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(authReducer, "");

    return <AuthContext.Provider value={{ user, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
