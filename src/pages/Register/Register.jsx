import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { registerRequest } from '../../api/user'
import styles from './Register.module.css'

const Register = ({ setUser, isAuthenticated, setIsAuthenticated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await registerRequest(data)
      setUser(response.data)
      setIsAuthenticated(true)
    } catch (error) {
      setError('register', {
        type: 'register',
        message: 'The user cannot register',
      })
    }
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/explore')
    }
  }, [isAuthenticated])

  return (
    <>
      <div className={styles.page}>
        <h2 className={styles.title}>Register your account</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Name
            </label>
            <div>
              <input
                {...register('name', { required: true })}
                className={styles.input}
                id="name"
                name="name"
                type="text"
                required
              />
            </div>
            {errors.name && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Last Name
            </label>
            <div>
              <input
                {...register('lastName', { required: true })}
                className={styles.input}
                id="lastName"
                name="lastName"
                type="text"
                required
              />
            </div>
            {errors.lastName && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email Adress
            </label>
            <div>
              <input
                {...register('email', { required: true })}
                className={styles.input}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            {errors.email && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <div>
              <input
                {...register('password', { required: true })}
                className={styles.input}
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            {errors.password && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Confirm Password
            </label>
            <div>
              <input
                {...register('confirmPassword', {
                  required: true,
                  validate: (value) => {
                    value === getValues('password') || 'The passwords do not match'
                  },
                })}
                className={styles.input}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
              />
            </div>
            {errors.confirmPassword && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Country
            </label>
            <div>
              <input
                {...register('country', { required: true })}
                className={styles.input}
                id="country"
                name="country"
                type="text"
                required
              />
            </div>
            {errors.country && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Description
            </label>
            <div>
              <input
                {...register('description', { required: true })}
                className={styles.input}
                id="description"
                name="description"
                type="text"
              />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              User Name
            </label>
            <div>
              <input
                {...register('userName', { required: true })}
                className={styles.input}
                id="userName"
                name="userName"
                type="userName"
                required
              />
            </div>
            {errors.userName && <span className={styles.error}>This field is required</span>}
          </div>
          {errors.register && <span className={styles.error}>{errors.register.message}</span>}
          <button className={styles.button} type="submit">
            Sign Up
          </button>
          <div className={styles.field}>
            <p>If you are registered go to </p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
