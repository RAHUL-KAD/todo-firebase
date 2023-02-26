import { useAuth } from '@/context/AuthContext'
import React from 'react'

export default function UserDashboard() {

  const { currentUser } = useAuth()

  return (
    <div>
      {currentUser.uid}
      <br />
      {currentUser.email}
    </div>
  )
}
