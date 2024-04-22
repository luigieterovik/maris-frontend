import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import CarouselItem from '../../components/CarouselItem'
import Pagination from '../../components/Pagination'

import { productsState } from '../../utils/states'

import * as S from './styles'
export default function FilteredProducts() {
  const navigate = useNavigate()
  
  const { products } = productsState()

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(4)

  const indexOfLastProduct = Math.min(
    currentPage * productsPerPage,
    products.length
  )
  const indexOfFirstProduct = Math.max(0, indexOfLastProduct - productsPerPage)
  const currentProducts = products.slice(
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
        <S.Title>Produtos com &quot;&quot;</S.Title>
        <S.WrapperProducts>
          {currentProducts.map(product => (
            <CarouselItem
              key={product.id}
              isOffer={product.isOffer}
              image={product.image}
              name={product.name}
              price={product.price}
              offerPercentage={product.isOffer && product.offerPercentage}
              installment={product.installment}
              isCatalogue
            />
          ))}

          <Pagination
            totalProducts={products.length}
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
