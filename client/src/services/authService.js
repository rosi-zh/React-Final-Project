import { clearUserData, setUserData } from "../helpers/util";
import { get, post } from "./api";

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

export async function register(email, password) {
    const result = await post(endpoints.register, {email, password});
    setUserData(result);
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}