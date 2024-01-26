import styles from './FollowSuggestions.module.css'
import { useProfile } from '../../context/ProfileContext'

export default function FollowSuggestions() {
  const { suggestions } = useProfile()

  return (
    <div className={styles.suggestionsWrapper}>
      <h4>Suggestions for you</h4>
      {suggestions.map((users) => (
        <div key={users} className={styles.suggestionCard}>
          <div className={styles.profileImage}>
            <img src={users.imageUrl} alt="users-image" />
          </div>
          <div className={styles.profileTitle}>
            {users.lastName}, {users.name}
          </div>
          <div className={styles.userName}>@{users.userName}</div>
          <div className={styles.profileFooter}>
            <div className={styles.footerData}>
              <p>Recipes</p>
              <span>{users.recipes.length}</span>
            </div>
            <div className={styles.footerData}>
              <p>Followers</p>
              <span>{users.followers.length}</span>
            </div>
            <div className={styles.footerData}>
              <p>Following</p>
              <span>{users.following.length}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
