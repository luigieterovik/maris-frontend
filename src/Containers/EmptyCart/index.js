import React from 'react'

import { useNavigate } from 'react-router-dom'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function EmptyCart() {
  const navigate = useNavigate()

  return (
    <S.EmptyCartContainer>
      <S.CartImage src={i('cart2.png')} />
      <h2>Seu carrinho está vazio</h2>
      <S.CartButton onClick={() => navigate('/products')}>
        Veja nossos produtos
      </S.CartButton>
    </S.EmptyCartContainer>
  )
}
