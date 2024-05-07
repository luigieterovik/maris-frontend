import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { useNavigate, useSearchParams } from 'react-router-dom'

import CarouselItem from '../../components/CarouselItem'
import Pagination from '../../components/Pagination'

import { productsState } from '../../utils/states'
import { navigateToSearch, searchOnProducts } from '../../utils/functions'

const i = name => {
  return require('../../assets/' + name)
}

import * as S from './styles'
export function Search({ searchBy, foundProducts }) {
  const navigate = useNavigate()

  const productsFoundBySearch = foundProducts

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)

  const indexOfLastProduct = Math.min(
    currentPage * productsPerPage,
    productsFoundBySearch.length
  )
  const indexOfFirstProduct = Math.max(0, indexOfLastProduct - productsPerPage)
  const currentProducts = productsFoundBySearch.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
    navigate(`/search/?page=${pageNumber}`)
  }

  return (
    <S.Wrapper>
      <S.ProductsWrapper>
        <S.Title>Produtos com &quot;{searchBy}&quot;</S.Title>
        <S.Division />
        <S.WrapperProducts>
          {currentProducts.map(product => (
            <CarouselItem
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              offerPercentage={product.offerPercentage}
              installment={product.installment}
              isCatalogue
            />
          ))}

          <Pagination
            totalProducts={foundProducts.length}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </S.WrapperProducts>
      </S.ProductsWrapper>
    </S.Wrapper>
  )
}

Search.propTypes = {
  searchBy: PropTypes.string.isRequired,
  foundProducts: PropTypes.array.isRequired
}

export function SearchIsNull({ ...props }) {
  const navigate = useNavigate()
  const inputRef = useRef(null)

  return (
    <S.NullWrapper>
      <S.Title>Buscar</S.Title>
      <S.Description>
        {props.searchByTerm
          ? `Nenhum resultado com "${props.searchByTerm}" encontrado`
          : 'Use a barra de busca para encontrar produtos'}
      </S.Description>

      <S.InputWrapper>
        <S.Input
          placeholder=""
          ref={inputRef}
          onKeyPress={event =>
            event.key === 'Enter' && navigateToSearch(navigate, inputRef)
          }
        />
        <S.InputPlaceholder>Buscar...</S.InputPlaceholder>
        <S.InputButton onClick={() => navigateToSearch(navigate, inputRef)}>
          <S.Magnifying src={i('magnifying.png')} alt="magnifying-glass-icon" />
        </S.InputButton>
      </S.InputWrapper>
      <S.LinkBackHome onClick={() => navigate('/')}>
        ou clique aqui para voltar à página inicial
      </S.LinkBackHome>
    </S.NullWrapper>
  )
}

SearchIsNull.propTypes = {
  searchByTerm: PropTypes.string.isRequired
}

export function SearchSelector() {
  const { products } = productsState()

  const [searchBy, setSearchBy] = useState('')
  const [searchParams] = useSearchParams()
  const [foundProducts, setFoundProducts] = useState([])

  useEffect(() => {
    const searchParam = searchParams.get('q')
    if (searchParam) setSearchBy(searchParam.trim())
    else setSearchBy('')
  }, [searchParams])

  useEffect(() => {
    // Atualize os produtos encontrados no estado
    setFoundProducts(searchOnProducts(searchBy, products))
  }, [searchBy, products])

  return (
    <>
      {searchBy === '' || foundProducts.length === 0 ? (
        <SearchIsNull searchByTerm={searchBy} />
      ) : (
        <Search searchBy={searchBy} foundProducts={foundProducts} />
      )}
    </>
  )
}
