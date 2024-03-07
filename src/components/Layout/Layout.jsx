import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import NavBar from '../NavBar'
import { useProfile } from '../../context/ProfileContext'
import Footer from '../Footer/Footer'
import BackArrow from '../icons/BackArrow'
import TopArrow from '../icons/TopArrow'
import Chat from '../Chat/Chat'

export default function Layout() {
  const { isAuthenticated } = useProfile()
  return (
    <>
      <NavBar />

      <main className={styles.main}>
        <Outlet />
      </main>

      {isAuthenticated && <Chat />}

      {isAuthenticated && (
        <Link className={styles.createButton} to="/recipe/create">
          +
        </Link>
      )}

      <button className={styles.navButtonTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <TopArrow />
      </button>
      <Link className={styles.navButtonBack} to={-1}>
        <BackArrow />
      </Link>

     <div>
        <Footer />
      </div>
    </>
  )
}
