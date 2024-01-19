import axios from './axios'

//GET
export const getAllUsers = () => axios.get('/user')

export const getUserById = (id) => axios.get(`/user/${id}`)

export const checkAuthToken = () => axios.get('/user/authWithToken')

//POST
export const loginUser = (data) => axios.post('/user/login', data)

export const logoutUser = () => axios.post('/user/logout')

export const registerRequest = (data) => axios.post('/user', data)

//PUT

export const updateUser = (data) => axios.put(`/user/${id}`, data)

//PATCH

export const addFavoriteRecipe = (id) => axios.patch(`/user/favorite/add/${id}`)

export const removeFavoriteRecipe = (id) => axios.patch(`/user/favorite/remove/${id}`)
