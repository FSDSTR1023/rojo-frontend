import axios from './axios'

export const getAllRecipes = () => axios.get('/recipe')

export const getRecipeById = (id) => axios.get(`/recipe/${id}`)

export const createRecipe = (recipe) => axios.post('/', recipe)

export const updateRecipe = (recipe) => axios.put(`/recipe/${recipe.id}`, recipe)

export const deleteRecipe = (id) => axios.delete(`/recipe/${id}`)

