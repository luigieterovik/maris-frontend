import React from 'react'

import * as S from './styles'

export default function CheckoutField({ label }) {
  return (
    <>
      <S.FieldLabel>{label}</S.FieldLabel>
      <S.FieldDiv>
        <S.Input />
        <img />
      </S.FieldDiv>
    </>
  )
}
