import React, { useContext } from 'react'

import { CartContext } from '../../contexts/Cart'

import * as S from './styles'

export default function QuantityChanger({ id, quantity, setQuantity, isCart }) {
  const { incrementQuantity, decrementQuantity } = useContext(CartContext)

  return isCart ? (
    <S.QuantityWrapper isCart>
      <S.ChangeQuantity
        quantity={quantity}
        onClick={() => decrementQuantity(id)}
      >
        -
      </S.ChangeQuantity>
      <label>{quantity}</label>
      <S.ChangeQuantity onClick={() => incrementQuantity(id, 1)}>
        +
      </S.ChangeQuantity>
    </S.QuantityWrapper>
  ) : (
    <S.QuantityWrapper>
      <S.ChangeQuantity
        quantity={quantity}
        onClick={() => setQuantity(prevState => prevState - 1)}
      >
        -
      </S.ChangeQuantity>
      <label>{quantity}</label>
      <S.ChangeQuantity onClick={() => setQuantity(prevState => prevState + 1)}>
        +
      </S.ChangeQuantity>
    </S.QuantityWrapper>
  )
}
