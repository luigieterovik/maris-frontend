import React from 'react'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function Catalog() {
  return (
    <S.Container>
      <S.Wrapper>
      </S.Wrapper>

      <S.Wrapper isProducts>
      </S.Wrapper>
    </S.Container>
  )
}
