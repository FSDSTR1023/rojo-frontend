import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Layout({ isAuthenticated, setUser, setIsAuthenticated }) {
  const navigate = useNavigate()

  const logOut = () => {
    setIsAuthenticated(false)
    setUser(null)
    navigate('/login')
  }

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
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/login" onClick={logOut}>
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
