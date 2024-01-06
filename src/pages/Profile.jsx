import React from 'react'
import { Navigate } from 'react-router-dom'
import MyProfile from '../components/MyProfile/MyProfile'

const Profile = ({ isAuthenticated, user, userProfile, setUserProfile }) => {
  // Verificar la autenticación
  if (!isAuthenticated) {
    // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
    return <Navigate to="/login" />
  }

  // Si el usuario está autenticado, cargar y mostrar su perfil
  return (
    <MyProfile
      user={user}
      isAuthenticated={isAuthenticated}
      userProfile={userProfile}
      setUserProfile={setUserProfile}
    />
  )
}

export default Profile
