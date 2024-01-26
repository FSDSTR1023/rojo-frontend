import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext'
import styles from './ProfileData.module.css'

export default function ProfileDataEdit({ setEditing }) {
  const { profile, updateUserProfile } = useProfile()
  const [editableData, setEditableData] = useState({ ...profile })

  const handleUpdateUser = () => {
    updateUserProfile(editableData)
    setEditing(false)
  }

  const handleCancel = () => {
    setEditing(false)
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.field}>
        <p className={styles.fieldTitle}>Name</p>
        <input
          className={styles.fieldInput}
          type="text"
          value={editableData.name}
          onChange={(e) => setEditableData({ ...editableData, name: e.target.value })}
        />
      </div>
      <div className={styles.field}>
        <p className={styles.fieldTitle}>Last Name</p>
        <input
          className={styles.fieldInput}
          type="text"
          value={editableData.lastName}
          onChange={(e) => setEditableData({ ...editableData, lastName: e.target.value })}
        />
      </div>
      <div className={styles.field}>
        <p className={styles.fieldTitle}>Username</p>
        <input
          className={styles.fieldInput}
          type="text"
          value={editableData.userName}
          onChange={(e) => setEditableData({ ...editableData, userName: e.target.value })}
        />
      </div>
      <div className={styles.field}>
        <p className={styles.fieldTitle}>Email</p>
        <input
          className={styles.fieldInput}
          type="text"
          value={editableData.email}
          onChange={(e) => setEditableData({ ...editableData, email: e.target.value })}
        />
      </div>
      <div className={styles.field}>
        <p className={styles.fieldTitle}>Country</p>
        <input
          className={styles.fieldInput}
          type="text"
          value={editableData.country}
          onChange={(e) => setEditableData({ ...editableData, country: e.target.value })}
        />
      </div>
      <div className={styles.field}>
        <p className={styles.fieldTitle}>Description</p>
        <input
          className={styles.fieldInput}
          type="text"
          value={editableData.description}
          onChange={(e) => setEditableData({ ...editableData, description: e.target.value })}
        />
      </div>
      <div className={styles.updateButton}>
        <button onClick={handleUpdateUser}>Save Changes</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  )
}
