import React, { useState, useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/Cart'

import * as S from './styles'
import QuantityChanger from '../../components/QuantityChanger'

import { priceToCurrency } from '../../utils/functions'

const i = name => {
  return require('../../assets/' + name)
}

export function Cart() {
  const navigate = useNavigate()

  const { cartProducts, removeProductToCart } = useContext(CartContext)

  const [total, setTotal] = useState()
  const [economy, setEconomy] = useState()

  useEffect(() => {
    setTotal(
      cartProducts.reduce(
        (acc, product) =>
          acc +
          (product.offerPrice ? product.offerPrice : product.price) *
            product.quantity,
        0
      )
    )

    setEconomy(
      cartProducts.reduce(
        (acc, product) =>
          acc +
          (product.offerEconomy ? product.offerEconomy : 0) * product.quantity,
        0
      )
    )
  }, [cartProducts])

  return cartProducts.length === 0 ? (
    <S.EmptyCartContainer>
      <S.CartImage src={i('cart2.png')} />
      <h2>Seu carrinho está vazio</h2>
      <S.CartButton onClick={() => navigate('/products')}>
        Veja nossos produtos
      </S.CartButton>
    </S.EmptyCartContainer>
  ) : (
    <S.Container>
      <h2>Meu carrinho</h2>

      <S.ContainersWrapper>
        <S.LeftContainer>
          <S.LayoutDiv>
            <S.Column>Produto</S.Column>
            <S.Column>Quantidade</S.Column>
            <S.Column>Total</S.Column>
          </S.LayoutDiv>
          {Array.isArray(cartProducts) &&
            cartProducts.map((product, index) => (
              <>
                {' '}
                <S.Division />
                <S.LayoutDiv key={index} isProduct>
                  <S.ProductColumn>
                    <S.ProductImage src={i(product.image)} alt="product" />
                    <S.ProductInformatiosDiv>
                      <S.ProductName>{product.name}</S.ProductName>
                      <S.ProductPrice hasOffer={product.offerPrice}>
                        {priceToCurrency(
                          product.offerPrice
                            ? product.offerPrice
                            : product.price
                        )}
                        {product.offerPrice && (
                          <label>{priceToCurrency(product.price)}</label>
                        )}
                      </S.ProductPrice>
                    </S.ProductInformatiosDiv>
                  </S.ProductColumn>

                  <S.QuantityColumn>
                    <QuantityChanger
                      isCart
                      quantity={product.quantity}
                      id={product.id}
                    />
                    <label
                      className="labelRemove"
                      onClick={() => removeProductToCart(product.id)}
                    >
                      Remover
                    </label>
                  </S.QuantityColumn>

                  <S.TotalColumn>
                    <label>
                      {priceToCurrency(
                        product.offerPrice ? product.offerPrice : product.price
                      )}
                    </label>
                  </S.TotalColumn>
                </S.LayoutDiv>
              </>
            ))}
        </S.LeftContainer>

        <S.RightContainer>
          <S.Total>
            Total <label>{total && priceToCurrency(total)}</label>
          </S.Total>
          {economy !== 0 && economy && (
            <S.TotalEconomy>
              Você economizou {priceToCurrency(economy)}
            </S.TotalEconomy>
          )}
          <S.PaymentTag>PIX/CARTÃO RECEBA 3 DIAS ANTES</S.PaymentTag>
          <S.FinishButton>FINALIZAR COMPRA</S.FinishButton>
          <S.ContinueBuyingButton onClick={() => navigate('/products')}>CONTINUAR COMPRANDO</S.ContinueBuyingButton>
        </S.RightContainer>
      </S.ContainersWrapper>
    </S.Container>
  )
}
