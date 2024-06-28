import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export default function RouteTemplate({ children }) {
  const navigate = useNavigate()

  const interceptor = api.interceptors.response.use(
    response => response,
    error => {
      if (error.response) {
        if (error.response.status === 401 && !error.config._isRetry) {
          error.config._isRetry = true

          localStorage.removeItem('marisboutiks:userData')
          navigate('/account/login/continue')

          return new Promise(() => {})
        }
      }
      return Promise.reject(error)
    }
  )

  useEffect(() => {
    return () => {
      api.interceptors.response.eject(interceptor)
    }
  }, [interceptor])

  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
    </S.Container>
  )
}

RouteTemplate.propTypes = {
  children: PropTypes.node.isRequired
}
