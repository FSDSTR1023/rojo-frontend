import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import NavBar from '../NavBar'
import { useProfile } from '../../context/ProfileContext'
import BackArrow from '../icons/BackArrow'

export default function Layout() {
  const { isAuthenticated } = useProfile()
  return (
    <>
      <NavBar />

      <main className={styles.main}>
        <Outlet />
      </main>

      {isAuthenticated && (
        <Link className={styles.createButton} to="/recipe/create">
          +
        </Link>
      )}

      <Link className={styles.backButton} to={-1}>
        <BackArrow />
      </Link>
    </>
  )
}
