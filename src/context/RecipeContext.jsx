import { createContext, useContext, useEffect, useState } from 'react'
import { addOpinion as addOpinionRequest, deleteOpinion as deleteOpinionRequest, getRecipeById } from '../api/recipe'
import { FETCH_STATUS } from '../constants/fetchStatus'
import { useParams } from 'react-router-dom'

export const RecipeContext = createContext(null)

export function RecipeProvider({ children }) {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})
  const [status, setStatus] = useState(FETCH_STATUS.LOADING)
  const [error, setError] = useState(null)

  const { title, imageUrl, ingredients, difficulty, preparationTime, categories, preparation, opinions, rating } =
    recipe

  useEffect(() => {
    getRecipeById(id)
      .then((response) => {
        setRecipe(response.data)
        setStatus(FETCH_STATUS.SUCCESS)
      })
      .catch((err) => {
        setStatus(FETCH_STATUS.ERROR)
        setError(err)
        console.error(err)
      })
  }, [])

  const addOpinion = (rating, text) => {
    addOpinionRequest(id, rating, text)
      .then((response) => {
        const { updatedOpinion, updatedRating } = response.data
        setRecipe((prevRecipe) => ({
          ...prevRecipe,
          opinions: [...opinions, updatedOpinion],
          rating: updatedRating,
        }))
      })
      .catch((err) => console.log(err))
  }

  const deleteOpinion = (opinionId) => {
    deleteOpinionRequest(id, opinionId)
      .then((response) => {
        const { updatedRating } = response.data
        setRecipe((prevRecipe) => ({
          ...prevRecipe,
          opinions: prevRecipe.opinions.filter((o) => o._id !== opinionId),
          rating: updatedRating,
        }))
      })
      .catch((err) => console.log(err))
  }

  return (
    <RecipeContext.Provider
      value={{
        id,
        title,
        imageUrl,
        ingredients,
        difficulty,
        preparationTime,
        categories,
        preparation,
        opinions,
        rating,
        status,
        error,
        addOpinion,
        deleteOpinion,
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

export const useRecipe = () => {
  const context = useContext(RecipeContext)

  if (!context) {
    throw new Error('useProfile has to be inside ProfileProvider')
  }

  return context
}
