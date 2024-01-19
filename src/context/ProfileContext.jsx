import { useContext, useState, createContext, useEffect } from 'react'
import { addFavoriteRecipe, checkAuthToken, loginUser, logoutUser, removeFavoriteRecipe } from '../api/user'

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

  const toggleFavorite = async (recipeId) => {
    try {
      if (profile.favRecipes.includes(recipeId)) {
        await removeFavoriteRecipe(recipeId)
      } else {
        await addFavoriteRecipe(recipeId)
      }
    } catch (error) {
      console.error('Error al agregar receta favorita:', error.message)
    }
    getProfile()
  }

  return (
    <ProfileContext.Provider value={{ profile, isAuthenticated, login, logout, toggleFavorite }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)

  if (!context) {
    throw new Error('useProfile has to be inside ProfileProvider')
  }

  return context
}
