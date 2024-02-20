import styles from './Profile.module.css'
import ProfileData from '../../components/ProfileData/ProfileData'
import ProfileCard from '../../components/ProfileCard'
import { useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import { useState } from 'react'

export default function Profile() {
  const { id } = useParams()
  const { user, setValue, getUser } = useUser(id)
  const [editing, setEditing] = useState(false)

  return (
    <div className={styles.profile}>
      <aside>
        <ProfileCard {...{ user, editing }} />
      </aside>
      <main className={styles.mainContent}>
        <ProfileData {...{ user, getUser, setValue, editing, setEditing }} />
      </main>
    </div>
  )
}
