import { setUserData } from "../helpers/util";
import { post } from "./api";

const endpoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    profile: '/users/me'
};

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    setUserData(result);
}