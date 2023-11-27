import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import * as authService from "../../services/authService";
import Path from "../../utils/paths";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
            })
            .catch(() => navigate(Path.Home));
    }, [])

    return null;
}