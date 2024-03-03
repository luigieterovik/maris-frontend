import React from 'react'

import * as S from './styles'

export default function Catalog() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title isMenu>Menu principal</S.Title>
        
        <S.MenuLink>Início</S.MenuLink>
        <S.MenuLink>Catálogo</S.MenuLink>
        <S.MenuLink>Todas as categorias</S.MenuLink>
      </S.Wrapper>

      <S.Wrapper isProducts>
        <S.Title>Todos os produtos</S.Title>
      </S.Wrapper>
    </S.Container>
  )
}
