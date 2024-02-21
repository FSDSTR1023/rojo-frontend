import styles from './Users.module.css'
import { FETCH_STATE } from '../../constants/fetchState'
import useUsers from '../../hooks/useUsers'
import { Link } from 'react-router-dom'
import FollowButton from '../../components/FollowButton/FollowButton'
import Chat from '../../components/Chat/Chat'

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
          <Link to={`/profile/${id}`}>
            <img className={styles.image} src={imageUrl} alt={`${userName}'s profile image`} />
          </Link>
          <p className={styles.country}>{country}</p>
          <p className={styles.description}>{description}</p>

          <FollowButton userId={id} />
        </div>
      ))}
      <Chat />
    </div>
  )
}
