import Axios from "./caller"

const getAllUsers = () => {
    return Axios.get('/');
}

const getUser = (id) => {
    return Axios.get('/users' + id);
}

export const userService = {
    getAllUsers, getUser
}