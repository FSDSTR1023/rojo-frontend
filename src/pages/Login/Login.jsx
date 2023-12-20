import styles from './Login.module.css'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { useNavigate } from 'react-router-dom'

export default function Login({ setIsAuthenticated, setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loginUser(data)
      setUser(response.data)
      setIsAuthenticated(true)
      navigate('/explore')
    } catch (error) {
      setError('login', {
        type: 'login',
        message: 'The user or the password does not exist',
      })
    }
  })

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
