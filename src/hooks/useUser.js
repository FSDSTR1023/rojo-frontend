import { useEffect, useState } from 'react'
import { getUserById } from '../api/user'
import { FETCH_STATE } from '../constants/fetchState'

export default function useUser(id) {
  const [user, setUser] = useState([])
  const [state, setState] = useState(FETCH_STATE.LOADING)
  const [error, setError] = useState(null)

  useEffect(() => {
    getUser()
  }, [id])

  const setValue = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }))
  }

  const getUser = async () => {
    setState(FETCH_STATE.LOADING)
    getUserById(id)
      .then((response) => {
        setUser(response.data)
        setState(FETCH_STATE.SUCCESS)
      })
      .catch((err) => {
        setError(err)
        setState(FETCH_STATE.ERROR)
        console.error(err)
      })
  }

  return {
    user,
    state,
    error,
    setValue,
    getUser,
  }
}
