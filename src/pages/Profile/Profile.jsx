import styles from './Profile.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FETCH_STATE } from '../../constants/fetchState'
import { getUserById } from '../../api/user'
import useUser from '../../hooks/useUser'

export default function Profile() {
  const { id } = useParams()
  const { user, state, error } = useUser(id)

  if (state === FETCH_STATE.LOADING) {
    return <div>Loading...</div>
  }

  if (state === FETCH_STATE.ERROR) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2>
        {user.name} {user.lastName}
      </h2>
      <img src={user.imageUrl} alt="profile-image" />
      <p>{user.email}</p>
      <p>{user.userName}</p>
      <p>{user.country}</p>
    </div>
  )
}
