import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function CategoryItem({ ...props }) {
  return (
    <S.CategoryItem>
      <S.CategoryImage src={i(props.image)} alt="offer-category-icon" />
      <S.CategoryDescription>
        {props.description}{' '}
        <S.RightArrowCategory src={i(props.arrow)} alt="right-arrow-icon" />
      </S.CategoryDescription>
    </S.CategoryItem>
  )
}

CategoryItem.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  arrow: PropTypes.string
}
