import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'
import { FETCH_STATE } from '../constants/fetchState'

export default function ProtectedRoutes() {
  const { isAuthenticated, state } = useProfile()

  if (state === FETCH_STATE.ERROR) {
    return <Navigate to="/login" replace />
  }

  if (!isAuthenticated && state !== FETCH_STATE.LOADING) return <Navigate to="/login" replace />

  return <Outlet />
}
