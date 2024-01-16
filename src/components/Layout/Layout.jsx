import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useProfile } from '../../context/ProfileContext'
import { useEffect } from 'react'

export default function Layout() {
  const navigate = useNavigate()
  const { profile, login, logout, isAuthenticated } = useProfile()

  useEffect(() => {
    if (isAuthenticated) navigate('/explore')
    else navigate('/login')
  }, [isAuthenticated])

  return (
    <>
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

      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
