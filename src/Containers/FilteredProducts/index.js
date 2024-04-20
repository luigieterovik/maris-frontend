import React from 'react'

import CarouselItem from '../../components/CarouselItem'
import Pagination from '../../components/Pagination'

import { productsState } from '../../utils/states'

import * as S from './styles'
export default function FilteredProducts() {
  const { products } = productsState

  return (
    <S.Wrapper>
      <S.ProductsWrapper>
        <S.Title>Produtos com &quot;&quot;</S.Title>
        <S.WrapperProducts>
          {products.map(product => (
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
            totalFilteredProducts={filteredProducts.length}
          />
        </S.WrapperProducts>
      </S.ProductsWrapper>
    </S.Wrapper>
  )
}
