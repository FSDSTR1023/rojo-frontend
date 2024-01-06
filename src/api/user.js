import axios from './axios'

export const getAllUsers = () => axios.get('/user')

export const loginUser = (data) => axios.post('/user/login', data)

export const registerRequest = (data) => axios.post('/user', data)

export const getUserProfile = () => axios.get('/user/profile')
