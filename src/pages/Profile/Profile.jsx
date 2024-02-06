import styles from './Profile.module.css'
import ProfileData from '../../components/ProfileData/ProfileData'
import ProfileCard from '../../components/ProfileCard'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUserById } from '../../api/user'
import { useProfile } from '../../context/ProfileContext'
import ProfileUserData from '../../components/ProfileData/ProfileUserData'

export default function Profile() {
  const { profile } = useProfile()
  const { id } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    {
      getUserById(id).then((response) => setUser(response.data))
    }
  }, [id])

  return (
    <div className={styles.profile}>
      <aside>
        <ProfileCard user={user} />
      </aside>
      <main className={styles.mainContent}>
        {user._id !== profile._id ? <ProfileUserData user={user} /> : <ProfileData user={user} setUser={setUser} />}
      </main>
    </div>
  )
}
