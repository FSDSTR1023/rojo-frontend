import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { registerRequest } from '../api/user'

const Register = ({ setUser, isAuthenticated, setIsAuthenticated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    try {
      const response = await registerRequest(data)
      setUser(response.data)
      setIsAuthenticated(true)
      console.log(response)
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
    <>
      <div>
        <div>
          <h2>Register your account</h2>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">Name</label>
              <div>
                <input {...register('name', { required: true })} id="name" name="name" type="text" required />
              </div>
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="email">Last Name</label>
              <div>
                <input
                  {...register('lastName', { required: true })}
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                />
              </div>
              {errors.lastName && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="email">Email Adress</label>
              <div>
                <input
                  {...register('email', { required: true })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div>
                <input
                  {...register('password', { required: true })}
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </div>
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <div>
                <input
                  {...register('confirmPassword', {
                    required: true,
                    validate: (value) => {
                      value === getValues('password') || 'The passwords do not match'
                    },
                  })}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                />
              </div>
              {errors.confirmPassword && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="email">Country</label>
              <div>
                <input {...register('country', { required: true })} id="country" name="country" type="text" required />
              </div>
              {errors.country && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="email">Description</label>
              <div>
                <input
                  {...register('description', { required: true })}
                  id="description"
                  name="description"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">User Name</label>
              <div>
                <input
                  {...register('userName', { required: true })}
                  id="userName"
                  name="userName"
                  type="userName"
                  required
                />
              </div>
              {errors.userName && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <button type="submit">Sign In</button>
              <div>
                <p>If you are registered go to </p>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
