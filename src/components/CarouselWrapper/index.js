import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const i = name => {
  return require('../../assets/' + name)
}

function RegularCarouselWrapper({ ...props }) {
  const navigate = useNavigate()

  const navigateToProducts = () => {
    window.scrollTo(0, 0)
    navigate('/products')
  }

  return (
    <>
      <S.CarouselWrapper>
        <S.CarouselTitle>
          {props.title}
          <S.CarouselSeeAll onClick={() => navigateToProducts('/products')}>
            {props.seeAll}
            <S.RightArrowSeeAll src={i(props.arrow)} alt="right-arrow-icon" />
          </S.CarouselSeeAll>
        </S.CarouselTitle>

        <S.CarouselBar></S.CarouselBar>

        {props.children}
      </S.CarouselWrapper>
    </>
  )
}

function SpecialCarouselWrapper({ ...props }) {
  const navigate = useNavigate()

  const navigateToProducts = () => {
    window.scrollTo(0, 0)
    navigate('/products')
  }

  return (
    <>
      <S.CarouselWrapper isSpecialCarousel>
        <S.SpecialCarouselInformations>
          <S.SpecialCarouselTitle>{props.title}</S.SpecialCarouselTitle>

          <S.SpecialCarouselDescription>
            {props.description}
          </S.SpecialCarouselDescription>
          <Button
            isSpecialButton={true}
            onClick={() => navigateToProducts('/products')}
          >
            {props.button}
          </Button>
        </S.SpecialCarouselInformations>

        {props.children}
      </S.CarouselWrapper>
    </>
  )
}

export default function CarouselWrapperSelector({
  isSpecialCarousel,
  ...props
}) {
  return (
    <>
      {isSpecialCarousel ? (
        <SpecialCarouselWrapper {...props} />
      ) : (
        <RegularCarouselWrapper {...props} />
      )}
    </>
  )
}

RegularCarouselWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  seeAll: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired
}

SpecialCarouselWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
}

CarouselWrapperSelector.propTypes = {
  isSpecialCarousel: PropTypes.bool
}
