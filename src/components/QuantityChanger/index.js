import React from 'react'

import * as S from './styles'

export default function QuantityChanger({ quantity, setQuantity, isCart }) {
  return (
    <S.QuantityWrapper isCart={isCart}>
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
