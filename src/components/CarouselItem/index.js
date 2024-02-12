import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styles'

const i = (name) => {
  return require('../../assets/' + name)
}

function CarouselItem ({ ...props }) {
  return (
        <>
            { props.isOffer
              ? (
                <S.CarouselItem>
                    <S.ItemImage src={i(props.image)} alt='perfume-image'/>

                    <S.ItemName>{ props.name }</S.ItemName>

                    <S.ItemPrice>R$ { props.price }
                    <S.OldPrice>R$ { props.oldPrice }</S.OldPrice></S.ItemPrice>
                    <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ { props.installment }</span></S.ItemInstallment>
                </S.CarouselItem>
                )
              : (
                <S.CarouselItem>
                    <S.ItemImage src={i(props.image)} alt='perfume-image'/>

                    <S.ItemName>{ props.name }</S.ItemName>
                    <S.ItemPrice>R$ { props.price } </S.ItemPrice>

                    <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ { props.installment } </span></S.ItemInstallment>
                </S.CarouselItem>
                ) }
        </>
  )
}

CarouselItem.propTypes = {
  isOffer: PropTypes.bool,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  installment: PropTypes.string.isRequired
}

export default CarouselItem
