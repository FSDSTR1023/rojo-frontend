import styles from '../styles/Login.module.css'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { loginUser } from '../api/user'
import { useNavigate } from 'react-router-dom'

export default function Login({ isAuthenticated, setIsAuthenticated, setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    try {
      const response = await loginUser(data)
      setUser(response.data)
      setIsAuthenticated(true)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/recipe')
    }
  }, [isAuthenticated])

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Login</h2>

      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            E-mail:
          </label>
          <input {...register('email', { required: true })} className={styles.input} type="text" name="email" />
        </div>
        {errors.email && <span className={styles.error}>This field is required</span>}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            {...register('password', { required: true })}
            className={styles.input}
            type="password"
            name="password"
          />
        </div>
        {errors.password && <span className={styles.error}>This field is required</span>}
        <button className={styles.button}>Send</button>
      </form>
    </div>
  )
}
