import styles from './ProfileData.module.css'
import { useState } from 'react'
import FavRecipesWrapper from '../FavRecipes'
import FormField from '../FormField/FormField'
import { useProfile } from '../../context/ProfileContext'

export default function ProfileData({ user, getUser, setValue }) {
  const { profile, updateUserProfile } = useProfile()
  const [editing, setEditing] = useState(false)

  const handleUpdateUser = () => {
    const update = async () => {
      await updateUserProfile(user)
      await getUser()
      setEditing(false)
    }
    update()
  }

  const handleCancel = () => {
    getUser().then(() => setEditing(false))
  }

  return (
    <div className={styles.profileInformation}>
      <div>
        <div className={styles.header}>
          <h4>Profile information</h4>
          <div className={styles.buttonContainer}>
            {profile?._id === user._id &&
              (editing ? (
                <>
                  <button className={styles.updateButton} onClick={handleUpdateUser}>
                    Save Changes
                  </button>
                  <button className={styles.updateButton} onClick={handleCancel}>
                    Cancel
                  </button>
                </>
              ) : (
                <button className={styles.updateButton} onClick={() => setEditing(true)}>
                  Edit Profile
                </button>
              ))}
          </div>
        </div>
        <div className={styles.profileContainer}>
          <FormField label="Name" value={user.name} setValue={(value) => setValue('name', value)} isEdit={editing} />
          <FormField
            label="Last Name"
            value={user.lastName}
            setValue={(value) => setValue('lastName', value)}
            isEdit={editing}
          />
          <FormField
            label="User Name"
            value={user.userName}
            setValue={(value) => setValue('userName', value)}
            isEdit={editing}
          />
          <FormField
            label="E-mail"
            value={user.email}
            setValue={(value) => setValue('email', value)}
            isEdit={editing}
          />
          <FormField
            label="Country"
            value={user.country}
            setValue={(value) => setValue('country', value)}
            isEdit={editing}
          />
          <FormField
            label="Description"
            value={user.description}
            setValue={(value) => setValue('description', value)}
            isEdit={editing}
          />
        </div>
      </div>
      <div className={styles.field}>
        <FavRecipesWrapper user={user} />
      </div>
    </div>
  )
}
