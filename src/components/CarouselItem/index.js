import PropTypes from 'prop-types'
import React from 'react'

import { installmentCalculation, offerPercentageCalculate, priceToCurrency } from '../../utils/functions'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

function RegularCarouselItem({ ...props }) {
  return (
    <S.CarouselItem {...props}>
      <S.ItemImage src={i(props.image)} alt="perfume-image" />

      <S.ItemName>{props.name}</S.ItemName>
      <S.ItemPrice>{priceToCurrency(props.price)} </S.ItemPrice>

      <S.ItemInstallment>
        em até <b>12x</b> de{' '}
        <span style={{ color: 'green', fontWeight: 600 }}>
          {priceToCurrency(installmentCalculation(props.price))}
        </span>
      </S.ItemInstallment>
    </S.CarouselItem>
  )
}

function OfferCarouselItem({ ...props }) {
  return (
    <S.CarouselItem {...props}>
      <S.ItemImage src={i(props.image)} alt="perfume-image" />

      <S.ItemName>{props.name}</S.ItemName>

      <S.ItemPrice style={{ color: 'green' }}>
        {' '}
        {priceToCurrency(offerPercentageCalculate(props.price, props.offerPercentage))}
        <S.OldPrice>{props.price}</S.OldPrice>
      </S.ItemPrice>
      <S.ItemInstallment>
        em até <b>12x</b> de{' '}
        <span style={{ color: 'green', fontWeight: 600 }}>
          {priceToCurrency(installmentCalculation(props.price))}
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
  isCatalogue: PropTypes.bool,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  installment: PropTypes.string.isRequired
}

OfferCarouselItem.propTypes = {
  isCatalogue: PropTypes.bool,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  offerPercentage: PropTypes.number,
  installment: PropTypes.string.isRequired
}

CarouselItemSelector.propTypes = {
  isOffer: PropTypes.bool
}
