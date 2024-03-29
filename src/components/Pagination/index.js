import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'
import arrow from '../../assets/downArrow.png'

export default function Pagination({
  productsPerPage,
  totalProducts,
  setCurrentPage,
  currentPage
}) {
  let pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <S.Wrapper>
      <S.PageNavigator isFirstPage={currentPage == 1} currentPage onClick={() => setCurrentPage(currentPage - 1)}>
        <S.Arrow src={arrow} left />
        Anterior
      </S.PageNavigator>

      <S.PagesWrapper>
        {pageNumbers.map((page, index) => (
          <S.Pages
            key={index}
            onClick={() => setCurrentPage(page)}
            isSamePage={page == currentPage}
          >
            {page}
          </S.Pages>
        ))}
      </S.PagesWrapper>

      <S.PageNavigator isLastPage={currentPage == pageNumbers.length} onClick={() => setCurrentPage(currentPage + 1)}>
        Próxima <S.Arrow src={arrow} />
      </S.PageNavigator>
    </S.Wrapper>
  )
}

Pagination.propTypes = {
  productsPerPage: PropTypes.number,
  totalProducts: PropTypes.number,
  setCurrentPage: PropTypes.number,
  currentPage: PropTypes.number
}
