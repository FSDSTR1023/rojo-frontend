import { useEffect, useState } from 'react'
import { getAllRecipes } from '../api/recipe'
import { FETCH_STATE } from '../constants/fetchState'

export default function useRecipes() {
  const [recipes, setRecipes] = useState([])
  const [state, setState] = useState(FETCH_STATE.LOADING)
  const [error, setError] = useState(null)

  useEffect(() => {
    setState(FETCH_STATE.LOADING)
    getAllRecipes()
      .then((response) => {
        setRecipes(response.data)
        setState(FETCH_STATE.SUCCESS)
      })
      .catch((err) => {
        setError(err)
        setState(FETCH_STATE.ERROR)
        console.error(err)
      })
  }, [])

  return {
    recipes,
    state,
    error,
  }
}
