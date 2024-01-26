import styles from './ProfileData.module.css'
import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext'
import ProfileDataEdit from './ProfileDataEdit'

export default function ProfileData() {
  const { profile } = useProfile()
  const [editing, setEditing] = useState(false)

  return (
    <div className={styles.profileInformation}>
      <h4>Profile information</h4>
      {!editing ? (
        <div className={styles.profileContainer}>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Name</p>
            <p className={styles.fieldData}>{profile.name}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Last Name</p>
            <p>{profile.lastName}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Username</p>
            <p>@{profile.userName}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Email</p>
            <p>{profile.email}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Country</p>
            <p>{profile.country}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.fieldTitle}>Description</p>
            <p>{profile.description}</p>
          </div>
          <div className={styles.updateButton}>
            <button onClick={() => setEditing(true)}>Edit Profile</button>
          </div>
        </div>
      ) : (
        <ProfileDataEdit setEditing={setEditing} />
      )}
    </div>
  )
}
