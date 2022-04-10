import axios from 'axios'

const API_URL = 'http://localhost:12399/api/users/'


const register = async (userdata) => {
    const response = await axios.post(API_URL, userdata)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const login = async (userdata) => {
    const response = await axios.post(API_URL + "login", userdata)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = async() => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService