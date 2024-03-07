import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { registerRequest } from '../../api/user'
import styles from './Register.module.css'
import { useProfile } from '../../context/ProfileContext'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()
  const navigate = useNavigate()
  const { isAuthenticated, login } = useProfile()

  const minLengthError = (value) => {
    return value.length >= 3 || 'Too short, this field must be at least 3 characters'
  }

  const maxLengthError = (value) => {
    return value.length <= 140 || 'Too loong, this field must have a maximum of a 140 characters'
  }

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { name, lastName, email, password, country, description, userName, imageUrl } = data
      await registerRequest({
        name,
        lastName,
        email,
        password,
        country,
        description,
        userName,
        imageUrl,
      })
      login({ email, password })
    } catch (error) {
      console.log(error)
    }
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/explore')
    }
  }, [isAuthenticated])

  return (
    <div className={styles.page}>
      <div className={styles.imgContainer}></div>
      <div className={styles.registerContainer}>
        <h2 className={styles.title}>Register your account</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              {...register('name', { required: 'This field is required', validate: minLengthError })}
              className={styles.input}
              id="name"
              name="name"
              type="text"
              required
            />
          </div>
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="lastName">
              Last Name
            </label>
            <input
              {...register('lastName', { required: 'This field is required', validate: minLengthError })}
              className={styles.input}
              id="lastName"
              name="lastName"
              type="text"
              required
            />
          </div>
          {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email Adress
            </label>
            <input
              {...register('email', { required: 'This field is required' })}
              className={styles.input}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              {...register('password', { required: 'This field is required', validate: minLengthError })}
              className={styles.input}
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              {...register('confirmPassword', {
                required: 'This field is required',
                validate: (value) => value === getValues('password') || 'The passwords do not match',
              })}
              className={styles.input}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
            />
          </div>
          {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="country">
              Country
            </label>
            <input
              {...register('country', { required: 'This field is required', validate: minLengthError })}
              className={styles.input}
              id="country"
              name="country"
              type="text"
              required
            />
          </div>
          {errors.country && <span className={styles.error}>{errors.country.message}</span>}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="description">
              Description
            </label>
            <input
              {...register('description', { validate: maxLengthError })}
              className={styles.input}
              id="description"
              name="description"
              type="text"
            />
          </div>
          {errors.description && <span className={styles.error}>{errors.description.message}</span>}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="userName">
              User Name
            </label>
            <input
              {...register('userName', { required: 'This field is required', validate: minLengthError })}
              className={styles.input}
              id="userName"
              name="userName"
              type="text"
              required
            />
          </div>
          {errors.userName && <span className={styles.error}>{errors.userName.message}</span>}
          {errors.register && <span className={styles.error}>{errors.register.message}</span>}
          <button className={styles.button} type="submit">
            Sign Up
          </button>
          <p>
            If you are registered go to <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
