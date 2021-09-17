import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
});



const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser
}

window.userService = userService;

function login(credentials) {
    console.log(credentials, 'credentials');
    return axios.post('http://localhost:3030/api/auth/login', credentials).then(res => res.data).then(user => {
        if (user) {
            sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        }
        return user;
    })
}
function signup(userInfo) {
    return axios.post('http://localhost:3030/api/auth/signup', userInfo).then(res => res.data).then(user => {
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user;
    })
}
function logout() {
    axios.post('http://localhost:3030/api/auth/logout').then(res => console.log(res + 'res'))
    return Promise.resolve()
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

