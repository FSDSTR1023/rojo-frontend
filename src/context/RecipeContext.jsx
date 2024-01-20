import { createContext, useContext, useEffect, useState } from 'react'
import { deleteOpinion as deleteOpinionApi, getRecipeById } from '../api/recipe'
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

  const setOpinion = (newOpinion) => {
    setRecipe((prevRecipe) => {
      // Obtain previous opinions and add new one
      const updatedOpinions = prevRecipe.opinions
      updatedOpinions.push(newOpinion)

      // Update recipe with new array of opinions
      const updatedRecipe = {
        ...prevRecipe,
        opinions: updatedOpinions,
      }
      return updatedRecipe
    })
  }

  const deleteOpinion = (opinionId) => {
    deleteOpinionApi(recipe._id, opinionId)
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
        setOpinion,
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
