import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import Path from "../utils/paths";
import { getUserData } from "../utils/util";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        let persistedState = getUserData();

        if (persistedState) {
            return persistedState;
        }

        return {};
    });
       
    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result);
  
        navigate(Path.Home);
    }

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.firstName, values.lastName, values.email, values.password);
        setAuth(result);

        navigate(Path.Home);
    }

    const logoutHandler = () => {
        setAuth({});
    }
    
    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        isAuth: !!auth.accessToken,
        userId: auth._id
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;