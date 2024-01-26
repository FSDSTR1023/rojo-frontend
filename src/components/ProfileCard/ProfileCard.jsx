import styles from './ProfileCard.module.css'
import { useProfile } from '../../context/ProfileContext'

export default function ProfileCard() {
  const { profile } = useProfile()
  console.log(profile)
  return (
    <div className={styles.sideBar}>
      <div className={styles.gradiant}></div>

      <div className={styles.profileDown}>
        <img className={styles.profileImage} src={profile.imageUrl} alt="profile-image" />
        <div className={styles.profileTitle}>
          {profile.lastName}, {profile.name}
        </div>
        <div className={styles.userName}>@{profile.userName}</div>
        <div className={styles.profileFooter}>
          <div className={styles.footerData}>
            <p>My Recipes</p>
            <span>{profile.recipes.length}</span>
          </div>
          <div className={styles.footerData}>
            <p>Followers</p>
            <span>{profile.followers.length}</span>
          </div>
          <div className={styles.footerData}>
            <p>Following</p>
            <span>{profile.following.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
