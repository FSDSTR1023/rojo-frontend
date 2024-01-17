import styles from './Login.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../../context/ProfileContext'
import { useEffect } from 'react'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()
  const navigate = useNavigate()
  const { login, isAuthenticated } = useProfile()

  const onSubmit = handleSubmit((data) => {
    login(data)
  })

  useEffect(() => {
    if (isAuthenticated) navigate('/explore')
  }, [isAuthenticated])

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Login</h2>

      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            E-mail:
          </label>
          <input
            {...register('email', { required: 'This field is required.' })}
            className={styles.input}
            type="text"
            name="email"
            id="email"
            autoComplete="email"
          />
        </div>
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            {...register('password', { required: 'This field is required.' })}
            className={styles.input}
            type="password"
            name="password"
            id="password"
          />
        </div>
        {errors.password && <span className={styles.error}>{errors.password.message}</span>}

        {errors.login && <span className={styles.error}>{errors.login.message}</span>}

        <button className={styles.button}>Send</button>
      </form>
    </div>
  )
}
