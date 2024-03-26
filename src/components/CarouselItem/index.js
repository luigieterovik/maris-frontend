import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

function RegularCarouselItem({ ...props }) {
  return (
    <S.CarouselItem>
      <S.ItemImage src={i(props.image)} alt="perfume-image" />

      <S.ItemName>{props.name}</S.ItemName>
      <S.ItemPrice>R$ {props.price} </S.ItemPrice>

      <S.ItemInstallment>
        em até <b>12x</b> de{' '}
        <span style={{ color: 'green', fontWeight: 600 }}>
          R$ {props.installment}
        </span>
      </S.ItemInstallment>
    </S.CarouselItem>
  )
}

function OfferCarouselItem({ ...props }) {
  return (
    <S.CarouselItem>
      <S.ItemImage src={i(props.image)} alt="perfume-image" />

      <S.ItemName>{props.name}</S.ItemName>

      <S.ItemPrice style={{ color: 'green' }}>
        {' '}
        R$ {props.price}
        <S.OldPrice>R$ {props.oldPrice}</S.OldPrice>
      </S.ItemPrice>
      <S.ItemInstallment>
        em até <b>12x</b> de{' '}
        <span style={{ color: 'green', fontWeight: 600 }}>
          R$ {props.installment}
        </span>
      </S.ItemInstallment>
    </S.CarouselItem>
  )
}

export default function CarouselItemSelector({ isOffer, ...props }) {
  return (
    <>
      {isOffer ? (
        <OfferCarouselItem {...props} />
      ) : (
        <RegularCarouselItem {...props} />
      )}
    </>
  )
}

RegularCarouselItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  installment: PropTypes.string.isRequired
}

OfferCarouselItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string,
  installment: PropTypes.string.isRequired
}

CarouselItemSelector.propTypes = {
  isOffer: PropTypes.bool
}
