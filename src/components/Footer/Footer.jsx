import styles from './Footer.module.css'
// import { youtube } from './youtube.png'
// import { instagram } from './instagram.png'
// import { facebook } from './facebook.png'
// import { twitter } from './twitter.jpg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenedorArriba}>
        <div className={styles.logosRrss}>
          <p>Síguenos en Redes Sociales</p>
          {/* <div className={styles.containerFacebook}></div> */}
          {/* <img src={youtube} /> */}
          {/* <img src={facebook} /> */}
          {/* <img src={instagram} /> */}
          {/* <img src={twitter} /> */}
          <div className={styles.descargaApp}></div>
        </div>
      </div>
      <div className={styles.contenedorAbajo}>
        <img />
        <p>HealthApp 2024</p>
        <link href="#">Contacta con nosotros</link>
        <link href="#">Términos y Condiciones</link>
        <link href="#">Política de Privacidad</link>
        <link href="#">Política de Cookies</link>
      </div>
    </footer>
  )
}
