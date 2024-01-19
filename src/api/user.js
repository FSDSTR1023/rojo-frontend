import axios from './axios'

//GET
export const getAllUsers = () => axios.get('/user')

export const getUserById = (id) => axios.get(`/user/${id}`)

export const getUserProfile = () => axios.get('/user/profile')

//POST
export const loginUser = (data) => axios.post('/user/login', data)

export const registerRequest = (data) => axios.post('/user', data)

export const addFavoriteRecipe = (data) => axios.post('/user/favorite', data)

//PUT

export const updateUser = (data) => axios.put(`/user/${id}`, data)

//DELETE

export const removeFavoriteRecipe = (data) => axios.delete('/user', { data })
