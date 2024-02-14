import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button'
import * as S from './styles'

function CarouselWrapper({ children, ...props }) {
  const i = name => {
    return require('../../assets/' + name)
  }

  return (
    <>
      {props.isSpecialCarousel ? (
        <S.CarouselWrapper isSpecialCarousel={true}>
          <S.SpecialCarouselInformations>
            <S.SpecialCarouselTitle>{props.title}</S.SpecialCarouselTitle>

            <S.SpecialCarouselDescription>
              {props.description}
            </S.SpecialCarouselDescription>
            <Button isSpecialButton={true}>{props.button}</Button>
          </S.SpecialCarouselInformations>

          {children}
        </S.CarouselWrapper>
      ) : (
        <S.CarouselWrapper>
          <S.CarouselTitle>
            {props.title}{' '}
            <S.CarouselSeeAll>
              {props.seeAll}{' '}
              <S.RightArrowSeeAll src={i(props.arrow)} alt="right-arrow-icon" />{' '}
            </S.CarouselSeeAll>{' '}
          </S.CarouselTitle>

          <S.CarouselBar></S.CarouselBar>

          {children}
        </S.CarouselWrapper>
      )}
    </>
  )
}

CarouselWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isSpecialCarousel: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  seeAll: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired
}

export default CarouselWrapper
