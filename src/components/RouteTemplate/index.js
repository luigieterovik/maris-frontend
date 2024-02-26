import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'

import * as S from './styles'

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