import React, { useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/Cart'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export function Cart() {
  const navigate = useNavigate()

  const { cartProducts, addProductToCart } = useContext(CartContext)

  return cartProducts.length === 0 ? (
    <S.Container>
      <S.CartImage src={i('cart2.png')} />
      <h2>Seu carrinho está vazio</h2>
      <S.CartButton onClick={() => navigate('/products')}>
        Veja nossos produtos
      </S.CartButton>
    </S.Container>
  ) : (
    <></>
  )
}
