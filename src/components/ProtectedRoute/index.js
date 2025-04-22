import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { validateToken } from '../../utils/functions/index.js'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true)

      const userData = JSON.parse(localStorage.getItem('marisboutiks:userData'))
      const token = userData?.token

      if (!token) {
        navigate('/account/login/continue')
        return
      }

      try {
        await validateToken(token)

        setLoading(false)
      } catch (error) {
        navigate('/account/login/continue')
      }
    }

    checkAuth()
  }, [location.pathname])

  if (loading) return <p>Validando acesso...</p>

  return children
}

export default ProtectedRoute
