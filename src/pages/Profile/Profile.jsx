import styles from './Profile.module.css'
import { useParams } from 'react-router-dom'
import { FETCH_STATE } from '../../constants/fetchState'
import useUser from '../../hooks/useUser'

export default function Profile() {
  const { id } = useParams()
  const { user, state, error } = useUser(id)
  const { name, lastName, userName, imageUrl, email, country, description, recipes } = user

  if (state === FETCH_STATE.LOADING) {
    return <div>Loading...</div>
  }

  if (state === FETCH_STATE.ERROR) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.profile}>
      <aside className={styles.sideBar}>
        <div className={styles.imageWrapper} style={{ backgroundImage: `url(${imageUrl})` }} />
        <h2 className={styles.name}>
          {name} {lastName}
        </h2>
        <p className={styles.userName}>@{userName}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.country}>{country}</p>
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
