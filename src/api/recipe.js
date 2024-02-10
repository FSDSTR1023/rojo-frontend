import axios from './axios'

//GET

export const getAllRecipes = (filters) => {
  const { difficulty, preparationTime, categories } = filters

  const difficultyFilter = difficulty && `difficulty=${difficulty}`
  const preparationTimeFilter = preparationTime && `preparationTime=${preparationTime}`
  const categoriesFilter = categories && categories.map((category) => `categories=${category}`)

  const queryParams = [difficultyFilter, preparationTimeFilter, ...categoriesFilter].filter((e) => e).join('&')

  return axios.get(`/recipe?${queryParams}`)
}

export const getRecipeById = (id) => axios.get(`/recipe/${id}`)

//POST

export const createRecipe = (recipe) => axios.post('/', recipe)

//PUT

export const updateRecipe = (recipe) => axios.put(`/recipe/${recipe.id}`, recipe)

//PATCH

export const addOpinion = (recipeId, text, rating) => axios.patch(`/recipe/opinion/add/${recipeId}`, { text, rating })

export const deleteOpinion = (recipeId, opinionId) => axios.patch(`/recipe/opinion/delete/${recipeId}`, { opinionId })

export const updateOpinion = (recipeId, text, rating, opinionId) =>
  axios.patch(`/recipe/opinion/update/${recipeId}`, { text, rating, opinionId })

//DELETE

export const deleteRecipe = (id) => axios.delete(`/recipe/${id}`)
