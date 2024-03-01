import styles from './Footer.module.css'
import Youtube from './Youtube'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Tiktok from './Tiktok'
import Copyright from './Copyright'
import { Link } from 'react-router-dom'
import android from '/googlePlay.webp'
import ios from '/appStore.webp'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenedorArriba}>
        <div className={styles.logosRrss}>
          <p>Síguenos en Redes Sociales</p>
          <div className={styles.icons}>
            <Youtube />
            <Facebook />
            <Instagram />
            <Tiktok />
          </div>
        </div>
        <div className={styles.descargaApp}>
          <p>Descarga nuestra App</p>
          <div className={styles.linkDescarga}>
            <img src={android} />
            <img src={ios} />
          </div>
        </div>
      </div>

      <div className={styles.contenedorAbajo}>
        <p>
          HealthApp 2024
          <Copyright />
        </p>

        <div className={styles.links}>
          <Link to="#">Contacta con nosotros</Link>
          <Link to="#">Términos y Condiciones</Link>
          <Link to="#">Política de Privacidad</Link>
          <Link to="#">Política de Cookies</Link>
        </div>
      </div>
    </footer>
  )
}
