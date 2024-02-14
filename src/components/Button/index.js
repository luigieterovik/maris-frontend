import PropTypes from 'prop-types'
import React from 'react'
import { Button as ButtonStyled } from './styles'

function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

Button.propTypes = {
  children: PropTypes.node.isRequired
}

export default Button
