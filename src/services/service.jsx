import Axios from "./caller";

const login = (formData) => {
    return Axios.post('/login', formData)
}

const register = (formData) => {
    return Axios.post('/register', formData)
}

const saveToken = ($token) => {
    localStorage.setItem('token', $token);
}

const logOut = () => {
    localStorage.removeItem('token');
}

const isLogged = () => {
    // Si j'ai qlqch dans le token, j'aurai un return de true sinon c'est null
    let token = localStorage.getItem('token');
    return !!token;
}

const getToken = () => {
    return localStorage.getItem('token');
}

export const service = {
    login, register, saveToken, logOut, isLogged, getToken
};