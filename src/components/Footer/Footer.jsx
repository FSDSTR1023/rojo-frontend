import styles from './Footer.module.css'
import Youtube from './Youtube'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenedorArriba}>
        <div className={styles.logosRrss}>
          <p>Síguenos en Redes Sociales</p>
          <Youtube />
          {/*<img src={facebook} />
          <img src={instagram} />
          <img src={twitter} /> */}
          <div className={styles.descargaApp}></div>
        </div>
      </div>
      <div className={styles.contenedorAbajo}>
        <img />
        <p>HealthApp 2024</p>
        <Link to="#">Contacta con nosotros</Link>
        <Link to="#">Términos y Condiciones</Link>
        <Link to="#">Política de Privacidad</Link>
        <Link to="#">Política de Cookies</Link>
      </div>
    </footer>
  )
}
