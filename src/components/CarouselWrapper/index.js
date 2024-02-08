import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button'
import * as Styles from './styles'

function CarouselWrapper ({ children, ...props }) {
  const i = (name) => {
    return require('../../assets/' + name)
  }

  return (
    <>
      { props.isSpecialCarousel
        ? (
          <Styles.CarouselWrapper isSpecialCarousel={true}>
            <Styles.SpecialCarouselInformations>
              <Styles.SpecialCarouselTitle>{ props.title }</Styles.SpecialCarouselTitle>

              <Styles.SpecialCarouselDescription>{ props.description }</Styles.SpecialCarouselDescription>
              <Button isSpecialButton={true}>{ props.button }</Button>
            </Styles.SpecialCarouselInformations>

            { children }
          </Styles.CarouselWrapper>
          )
        : (
        <Styles.CarouselWrapper>
          <Styles.CarouselTitle>{ props.title } <Styles.CarouselSeeAll>{ props.seeAll } <Styles.RightArrowSeeAll src={i(props.arrow)} alt='right-arrow-icon'/> </Styles.CarouselSeeAll> </Styles.CarouselTitle>

          <Styles.CarouselBar></Styles.CarouselBar>

          { children }
        </Styles.CarouselWrapper>
          ) }
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
