import axios from './axios'

export const getAllUsers = () => axios.get('/user')

export const loginUser = (data) => axios.post('/user/login', data)

export const createUser = (user) => axios.post('/user', user)
