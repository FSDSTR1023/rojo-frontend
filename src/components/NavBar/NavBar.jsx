import { Link } from 'react-router-dom'
import { useProfile } from '../../context/ProfileContext'
import styles from './NavBar.module.css'

export default function NavBar() {
  const { profile, logout, isAuthenticated } = useProfile()

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h1 className={styles.navTitle}>Health App</h1>
      </Link>

      <ul className={styles.navLinks}>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to={`/profile/${profile?._id}`}>Profile</Link>
            </li>
            <li>
              <Link to="/login" onClick={logout}>
                Log Out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
