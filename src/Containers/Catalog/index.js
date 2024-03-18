import React, { useState } from 'react'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function Catalog() {
  const [isCategoriesActive, setIsCategoriesActive] = useState(false)

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title isMenu>Menu principal</S.Title>

        <S.MenuLink>Início</S.MenuLink>
        <S.MenuLink catalogueLink>Catálogo</S.MenuLink>
        <S.MenuLink
          onClick={() => setIsCategoriesActive(!isCategoriesActive)}
          isCategoriesActive={isCategoriesActive}
        >
          Todas as categorias <S.DownArrow src={i('downArrow.png')} />
        </S.MenuLink>
      </S.Wrapper>

      <S.Wrapper isProducts>
        <S.Title>Todos os produtos</S.Title>
      </S.Wrapper>
    </S.Container>
  )
}
