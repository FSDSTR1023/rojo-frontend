import { useEffect, useState } from 'react'
import { getAllUsers } from '../api/user'
import { FETCH_STATE } from '../constants/fetchState'

export default function useUsers() {
  const [users, setUsers] = useState([])
  const [state, setState] = useState(FETCH_STATE.LOADING)
  const [error, setError] = useState(null)

  useEffect(() => {
    setState(FETCH_STATE.LOADING)
    getAllUsers()
      .then((response) => {
        setUsers(response.data)
        setState(FETCH_STATE.SUCCESS)
      })
      .catch((err) => {
        setError(err)
        setState(FETCH_STATE.ERROR)
        console.error(err)
      })
  }, [])

  return {
    users,
    state,
    error,
  }
}
