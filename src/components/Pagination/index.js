import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'
import arrow from '../../assets/downArrow.png'

export default function Pagination({
  productsPerPage,
  totalProducts,
  setCurrentPage,
  currentPage,
  handlePageChange
}) {
  const handleClick = page => {
    setCurrentPage(page)
    handlePageChange(page)
  }

  return (
    <S.Wrapper>
      <S.PageNavigator
        isFirstPage={currentPage == 1}
        onClick={() => handlePageChange(parseInt(currentPage) - 1)}
      >
        <S.Arrow src={arrow} left />
        Anterior
      </S.PageNavigator>

      <S.PagesWrapper>
        {Array.from(
          { length: Math.ceil(totalProducts / productsPerPage) },
          (_, index) => index + 1
        ).map(page => (
          <S.Pages
            key={page}
            onClick={() => handleClick(page)}
            isSamePage={page == currentPage}
          >
            {page}
          </S.Pages>
        ))}
      </S.PagesWrapper>

      <S.PageNavigator
        isLastPage={
          currentPage == Math.ceil(totalProducts / productsPerPage)
        }
        onClick={() => handlePageChange(parseInt(currentPage) + 1)}
      >
        Próxima <S.Arrow src={arrow} />
      </S.PageNavigator>
    </S.Wrapper>
  )
}

Pagination.propTypes = {
  productsPerPage: PropTypes.number,
  totalProducts: PropTypes.number,
  setCurrentPage: PropTypes.number,
  currentPage: PropTypes.number,
  handlePageChange: PropTypes.func
}
