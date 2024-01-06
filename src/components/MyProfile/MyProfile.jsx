import React, { useEffect } from 'react'
import { getUserProfile } from '../../api/user'
import styles from './MyProfile.module.css'

const MyProfile = ({ user, isAuthenticated, userProfile, setUserProfile }) => {
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await getUserProfile()
        setUserProfile(response.data)
      } catch (error) {
        console.error('Error al obtener perfil del usuario:', error)
      }
    }
    if (isAuthenticated && user && user.id) {
      fetchUserProfile(user.id) // Asegúrate de que getUserProfile acepta el ID como argumento
    }
  }, [isAuthenticated, setUserProfile, user])

  return (
    <div>
      <h2>{user.name} Profile</h2>
      <div className={styles.userProfileCard}>
        <div className={styles.gradiant}></div>

        <div className={styles.profileDown}>
          <img src="" alt="" />
          <div className={styles.profileTitle}>
            {user.lastName}, {user.name}
          </div>
          <div className={styles.userName}>@{user.userName}</div>
          <div className={styles.profileDescription}>{user.description}</div>
          <div className={styles.email}>Email: {user.email}</div>
          <div className={styles.country}>Country: {user.country}</div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
