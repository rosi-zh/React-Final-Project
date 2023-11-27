import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
       
    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result);
  
        navigate('/');
    }

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.firstName, values.lastName, values.email, values.password);
        setAuth(result);

        navigate('/');
    }
    
    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        isAuth: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;