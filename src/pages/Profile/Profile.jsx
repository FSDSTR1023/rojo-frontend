import styles from './Profile.module.css'
import ProfileData from '../../components/ProfileData/ProfileData'
import ProfileCard from '../../components/ProfileCard'
import { useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'

export default function Profile() {
  const { id } = useParams()
  const { user, setValue, getUser } = useUser(id)

  return (
    <div className={styles.profile}>
      <aside>
        <ProfileCard user={user} />
      </aside>
      <main className={styles.mainContent}>
        <ProfileData user={user} getUser={getUser} setValue={setValue} />
      </main>
    </div>
  )
}
