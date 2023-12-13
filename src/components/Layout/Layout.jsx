import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <h1 className={styles.navTitle}>Health App</h1>
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
