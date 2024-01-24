import styles from './Profile.module.css'
import { useProfile } from '../../context/ProfileContext'
import ProfileData from '../../components/ProfileData/ProfileData'

export default function Profile() {
  const { profile } = useProfile()

  if (!profile || !profile.name) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.profile}>
      <aside className={styles.sideBar}>
        <div className={styles.userProfileCard}>
          <div className={styles.gradiant}></div>

          <div className={styles.profileDown}>
            <img className={styles.profileImage} src={profile.imageUrl} alt="profile-image" />
            <div className={styles.profileTitle}>
              {profile.lastName}, {profile.name}
            </div>
            <div className={styles.userName}>@{profile.userName}</div>
            <div className={styles.email}>{profile.email}</div>
            <div className={styles.country}>{profile.country}</div>
          </div>
          <button className={styles.updateButton} onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <ProfileData />
      </main>
    </div>
  )
}
