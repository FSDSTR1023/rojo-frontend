import { createContext, useEffect, useState } from 'react'
import { getRecipeById } from '../api/recipe'
import { FETCH_STATUS } from '../constants/fetchStatus'
import { useParams } from 'react-router-dom'

const RecipeContext = createContext(null)

export function RecipeProvider({ children }) {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})
  const [status, setStatus] = useState(FETCH_STATUS.LOADING)
  const [error, setError] = useState(null)

  const { title, imageUrl, ingredients, difficulty, preparationTime, categories, preparation, opinions } = recipe

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
        status,
        error,
        setOpinion,
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeContext
