import { useContext, useState, createContext, useEffect } from 'react'
import { checkAuthToken, loginUser, logoutUser } from '../api/user'

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const getProfile = () => {
    checkAuthToken()
      .then((user) => {
        setProfile(user.data)
        setIsAuthenticated(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  const login = async (data) => {
    loginUser(data)
      .then(() => {
        getProfile()
      })
      .catch((error) => {
        setProfile(null)
        setIsAuthenticated(false)
      })
  }

  const logout = () => {
    logoutUser().then(() => {
      setProfile(null)
      setIsAuthenticated(false)
    })
  }

  return (
    <ProfileContext.Provider value={{ profile, isAuthenticated, login, logout }}>{children}</ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)

  if (!context) {
    throw new Error('useProfile has to be inside ProfileProvider')
  }

  return context
}
