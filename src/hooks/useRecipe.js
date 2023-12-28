import { useEffect, useState } from 'react'
import { getRecipeById } from '../api/recipe'

export default function useRecipe(id) {
  const [recipe, setRecipe] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getRecipeById(id)
      .then((response) => {
        setRecipe(response.data)
      })
      .catch((err) => {
        setError(true)
        console.log(err)
      })
      .finally(setLoading(false))
  }, [])

  return { recipe, loading, error }
}
