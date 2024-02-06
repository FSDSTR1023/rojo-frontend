import styles from './ProfileData.module.css'
import { useState, useEffect } from 'react'
import ProfileDataEdit from './ProfileDataEdit'
import { useProfile } from '../../context/ProfileContext'
import FavRecipesWrapper from '../FavRecipes'

export default function ProfileData({ user, setUser }) {
  const { profile } = useProfile()
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    if (!editing) {
      setUser(profile)
    }
  }, [profile, editing])

  return (
    <div className={styles.profileInformation}>
      {!editing ? (
        <div>
          <div className={styles.header}>
            <h4>Profile information</h4>
            <button className={styles.updateButton} onClick={() => setEditing(true)}>
              Edit Profile
            </button>
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
      ) : (
        <ProfileDataEdit setEditing={setEditing} user={user} />
      )}
      <div className={styles.field}>
        <FavRecipesWrapper user={user} />
      </div>
    </div>
  )
}
