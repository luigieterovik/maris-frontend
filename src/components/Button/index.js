import PropTypes from 'prop-types'
import React from 'react'
import { Button as ButtonStyled } from './styles'

export default function Button({ ...props }) {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

Button.propTypes = {
  children: PropTypes.node.isRequired
}
