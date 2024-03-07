import styles from './Opinion.module.css'
import Star from '../icons/Star'

export default function OpinionDisplay({ text, rating, user }) {
  return (
    <>
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
    </>
  )
}
