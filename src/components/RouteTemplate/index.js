import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'

import * as S from './styles'

import { BrowserRouter } from 'react-router-dom'

export default function RouteTemplate({ children }) {
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
