import styles from './ProfileData.module.css'
import FavRecipesWrapper from '../FavRecipes'

export default function ProfileUserData({ user }) {
  return (
    <div className={styles.profileInformation}>
      <div>
        <div className={styles.header}>
          <h4>Profile information</h4>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Name</p>
            <p className={styles.fieldData}>{user.name}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Last Name</p>
            <p>{user.lastName}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Username</p>
            <p>@{user.userName}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Email</p>
            <p>{user.email}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Country</p>
            <p>{user.country}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Description</p>
            <p>{user.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.field}>
        <FavRecipesWrapper user={user} />
      </div>
    </div>
  )
}
