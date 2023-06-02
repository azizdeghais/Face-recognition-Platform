import React from 'react'
import { useAuth } from '../Auth/Auth'
import { Navigate } from 'react-router-dom'

function RequireAuth({children}) {
    const auth=useAuth()

    if (!auth.user){
        return <Navigate to='/'/>
    }
  return children
}

export default RequireAuth
