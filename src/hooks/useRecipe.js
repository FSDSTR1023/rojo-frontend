import { useEffect, useState } from 'react'
import { getRecipeById } from '../api/recipe'
import { FETCH_STATUS } from '../constants/fetchStatus'

export default function useRecipe(id) {
  const [recipe, setRecipe] = useState({})
  const [status, setStatus] = useState(FETCH_STATUS.LOADING)
  const [error, setError] = useState(null)

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

  return { recipe, status, error }
}
