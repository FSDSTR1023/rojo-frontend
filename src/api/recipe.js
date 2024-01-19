import axios from './axios'

//GET

export const getAllRecipes = () => axios.get('/recipe')

export const getRecipeById = (id) => axios.get(`/recipe/${id}`)

//POST

export const createRecipe = (recipe) => axios.post('/', recipe)

//PUT

export const updateRecipe = (recipe) => axios.put(`/recipe/${recipe.id}`, recipe)

//DELETE

export const deleteRecipe = (id) => axios.delete(`/recipe/${id}`)
