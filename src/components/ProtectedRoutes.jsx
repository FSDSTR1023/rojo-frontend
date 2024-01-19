import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'

export default function ProtectedRoutes() {
  const { isAuthenticated } = useProfile()

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return <Outlet />
}
