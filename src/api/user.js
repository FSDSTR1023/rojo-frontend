import axios from './axios'

export const getAllUsers = () => axios.get('/user')

export const getUserById = (id) => axios.get(`/user/${id}`)

export const loginUser = (data) => axios.post('/user/login', data)

export const logoutUser = () => axios.post('/user/logout')

export const registerRequest = (data) => axios.post('/user', data)

export const checkAuthToken = () => axios.get('/user/authWithToken')
