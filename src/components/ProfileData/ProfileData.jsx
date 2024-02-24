import styles from './ProfileData.module.css'
import FavRecipesWrapper from '../FavRecipes'
import FormField from '../FormField/FormField'
import { useProfile } from '../../context/ProfileContext'
import { prepareImageData, uploadImageToCloudinary } from '../../api/cloudinary'

export default function ProfileData({
  user,
  getUser,
  setValue,
  editing,
  setEditing,
  newProfileImage,
  setNewProfileImage,
}) {
  const { profile, updateUserProfile } = useProfile()

  const handleUpdateUser = () => {
    const update = async () => {
      try {
        const imageData = prepareImageData(newProfileImage)
        const imageUrl = await uploadImageToCloudinary(imageData)

        await updateUserProfile({ ...user, imageUrl })
        await getUser()
        setEditing(false)
      } catch (err) {
        console.error('Error updating profile: ' + err)
      }
    }
    update()
  }

  const handleCancel = () => {
    getUser().then(() => {
      setEditing(false)
      setNewProfileImage(null)
    })
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
