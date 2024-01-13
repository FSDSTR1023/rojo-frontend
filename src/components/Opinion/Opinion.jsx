import styles from './Opinion.module.css'
import Star from '../Star'

export default function Opinion({ text, rating }) {
  return (
    <div className={styles.opinionWrapper}>
      <div className={styles.starsWrapper}>
        {[...Array(5)].map((e, i) => {
          const starClass = i < rating ? styles.fullStar : styles.emptyStar
          return <Star key={i} className={starClass} />
        })}
      </div>
      <p>{text}</p>
    </div>
  )
}
