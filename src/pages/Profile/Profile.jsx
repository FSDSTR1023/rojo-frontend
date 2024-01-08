import styles from './Profile.module.css'
import { Link, useParams } from 'react-router-dom'
import { FETCH_STATE } from '../../constants/fetchState'
import useUser from '../../hooks/useUser'
import { updateUser } from '../../api/user'

export default function Profile() {
  const { id } = useParams()
  const { user, state, error } = useUser(id)
  const { name, lastName, userName, imageUrl, email, country, description, recipes } = user

  const handleUpdateUser = () => {
    updateUser()
  }

  if (state === FETCH_STATE.LOADING) {
    return <div>Loading...</div>
  }

  if (state === FETCH_STATE.ERROR) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.profile}>
      <aside className={styles.sideBar}>
        <div className={styles.userProfileCard}>
          <div className={styles.gradiant}></div>

          <div className={styles.profileDown}>
            <img className={styles.profileImage} src={imageUrl} alt="profile-image" />
            <div className={styles.profileTitle}>
              {lastName}, {name}
            </div>
            <div className={styles.userName}>@{userName}</div>
            <div className={styles.email}>{email}</div>
            <div className={styles.country}>{country}</div>
          </div>
          <button className={styles.updateButton} onClick={handleUpdateUser}>
            Edit Profile
          </button>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.descriptionWrapper}>
          <h3 className={styles.sectionTitle}>About Me</h3>
          <p>{description}</p>
        </div>
        <div className={styles.recipesWrapper}>
          <h3 className={styles.sectionTitle}>Recipes</h3>
          {recipes.map((recipe) => (
            <p>{recipe.title}</p>
          ))}
        </div>
      </main>
    </div>
  )
}
