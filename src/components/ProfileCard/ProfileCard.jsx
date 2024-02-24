import styles from './ProfileCard.module.css'
import FollowButton from '../FollowButton/FollowButton'
import { useProfile } from '../../context/ProfileContext'

export default function ProfileCard({ user }) {
  const { profile } = useProfile()

  return (
    <div className={styles.sideBar}>
      <div className={styles.gradiant}></div>

      <div className={styles.profileDown}>
        <img className={styles.profileImage} src={user.imageUrl} alt="profile-image" />
        <div className={styles.profileTitle}>
          {user.lastName}, {user.name}
        </div>
        <div className={styles.userName}>@{user.userName}</div>
        <div className={styles.profileFooter}>
          <div className={styles.footerData}>
            <p>My Recipes</p>
            <span>{user.recipes?.length}</span>
          </div>
          <div className={styles.footerData}>
            <p>Followers</p>
            <span>{user.followers?.length}</span>
          </div>
          <div className={styles.footerData}>
            <p>Following</p>
            <span>{user.following?.length}</span>
          </div>
        </div>
        {user._id !== profile?._id && <FollowButton userId={user._id} />}
      </div>
    </div>
  )
}
