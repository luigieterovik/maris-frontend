import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

import { useNavigate } from 'react-router-dom'

const i = name => {
  return require('../../assets/' + name)
}

export default function CategoryItem({ ...props }) {
  const navigate = useNavigate()

  return (
    <S.CategoryItem onClick={() => navigate(`/products/?category=${props.navigate}`)}>
      <S.CategoryImage src={props.image} alt="offer-category-icon" />
      <S.CategoryDescription>
        {props.description}{' '}
        <S.RightArrowCategory
          src={i('rightArrow.png')}
          alt="right-arrow-icon"
        />
      </S.CategoryDescription>
    </S.CategoryItem>
  )
}

CategoryItem.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  navigate: PropTypes.string
}
