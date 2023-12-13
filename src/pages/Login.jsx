import styles from '../styles/Login.module.css'

export default function Login() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Login</h2>

      <form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            E-mail:
          </label>
          <input className={styles.input} type="text" name="email" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input className={styles.input} type="password" name="password" />
        </div>

        <button className={styles.button}>Send</button>
      </form>
    </div>
  )
}
