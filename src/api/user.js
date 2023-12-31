import axios from './axios'

export const getAllUsers = () => axios.get('/user')

export const getUserById = (id) => axios.get(`/user/${id}`)

export const loginUser = (data) => axios.post('/user/login', data)

export const registerRequest = (data) => axios.post('/user', data)
