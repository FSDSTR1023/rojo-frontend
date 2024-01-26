import styles from './Profile.module.css'
import { useProfile } from '../../context/ProfileContext'
import ProfileData from '../../components/ProfileData/ProfileData'
import ProfileCard from '../../components/ProfileCard'
import FollowSuggestions from '../../components/FollowSuggestions'

export default function Profile() {
  const { profile } = useProfile()

  if (!profile || !profile.name) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.profile}>
      <aside>
        <ProfileCard />
        <FollowSuggestions />
      </aside>
      <main className={styles.mainContent}>
        <ProfileData />
      </main>
    </div>
  )
}
