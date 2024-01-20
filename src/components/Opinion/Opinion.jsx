import styles from './Opinion.module.css'
import Star from '../Star'
import useUser from '../../hooks/useUser'
import { FETCH_STATE } from '../../constants/fetchState'
import EditIcon from '../EditIcon'
import DeleteIcon from '../DeleteIcon'
import { useProfile } from '../../context/ProfileContext'

export default function Opinion({ text, rating, user: userId }) {
  const { user, state, error } = useUser(userId)
  const { profile } = useProfile()

  const isOwner = profile._id === user._id

  if (state === FETCH_STATE.LOADING) {
    return <div>Loading...</div>
  }

  if (state === FETCH_STATE.ERROR) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.opinionWrapper}>
      <div className={styles.userWrapper}>
        <img className={styles.image} src={user.imageUrl} alt="profile-image" />
        <strong>{user.userName}</strong>
      </div>
      <div className={styles.starsWrapper}>
        {[...Array(5)].map((e, i) => {
          const starClass = i < rating ? styles.fullStar : styles.emptyStar
          return <Star key={i} className={starClass} />
        })}
      </div>
      <p>{text}</p>

      {isOwner && (
        <div className={styles.actions}>
          <EditIcon className={styles.edit} />
          <DeleteIcon className={styles.delete} />
        </div>
      )}
    </div>
  )
}
