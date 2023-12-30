import styles from './Users.module.css'
import { FETCH_STATE } from '../../constants/fetchState'
import useUsers from '../../hooks/useUsers'

export default function Users() {
  const { users, state, error } = useUsers()

  if (state === FETCH_STATE.LOADING) {
    return <div>Loading...</div>
  }

  if (state === FETCH_STATE.ERROR) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.profileWrapper}>
      {users.map(({ _id: id, userName, imageUrl, country, description }) => (
        <div key={id} className={styles.profileCard}>
          <h3 className={styles.userName}>{userName}</h3>
          <div className={styles.imageWrapper} style={{ backgroundImage: `url(${imageUrl})` }} />
          <p className={styles.country}>{country}</p>
          <p className={styles.description}>{description}</p>
        </div>
      ))}
    </div>
  )
}
