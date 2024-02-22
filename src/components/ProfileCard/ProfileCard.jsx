import styles from './ProfileCard.module.css'
import FollowButton from '../FollowButton/FollowButton'
import { useProfile } from '../../context/ProfileContext'
import Camera from '../icons/Camera'

export default function ProfileCard({ user, editing, newProfileImage, setNewProfileImage }) {
  const { profile } = useProfile()

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewProfileImage(e.target.files[0])
    }
  }

  return (
    <div className={styles.sideBar}>
      <div className={styles.gradiant}></div>

      <div className={styles.profileDown}>
        <div className={styles.imageWrapper}>
          {editing && (
            <label htmlFor="imageFile" className={styles.imageCover}>
              <Camera />
              <input
                type="file"
                id="imageFile"
                name="imageFile"
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/jpg, image/jfif"
                hidden
              />
            </label>
          )}
          <img
            className={styles.profileImage}
            src={newProfileImage ? URL.createObjectURL(newProfileImage) : user.imageUrl}
            alt="profile-image"
          />
        </div>
        <div className={styles.profileTitle}>
          {user.lastName}, {user.name}
        </div>
        <div className={styles.userName}>@{user.userName}</div>
        <div className={styles.profileFooter}>
          <div className={styles.footerData}>
            <p>My Recipes</p>
            <span>{user.recipes?.length}</span>
          </div>
          <div className={styles.footerData}>
            <p>Followers</p>
            <span>{user.followers?.length}</span>
          </div>
          <div className={styles.footerData}>
            <p>Following</p>
            <span>{user.following?.length}</span>
          </div>
        </div>
        {user._id !== profile._id && <FollowButton userId={user._id} />}
      </div>
    </div>
  )
}
