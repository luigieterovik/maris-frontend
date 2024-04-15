import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import CarouselItem from '../../components/CarouselItem'
import Pagination from '../../components/Pagination'

import { categoriesState, productsState } from '../../utils/states'
import { stringToUrl } from '../../utils/functions'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function Catalog() {
  const { categories } = categoriesState()
  const { products } = productsState()

  const [isCategoriesActive, setIsCategoriesActive] = useState(false)
  const [category, setCategory] = useState('all')

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(4)
  let filteredProducts =
    category === 'all'
      ? products
      : products.filter(product => product.category === category)
  if (category == 'ofertas')
    filteredProducts = products.filter(product => product.isOffer)
  const indexOfLastProduct = Math.min(
    currentPage * productsPerPage,
    filteredProducts.length
  )
  const indexOfFirstProduct = Math.max(0, indexOfLastProduct - productsPerPage)
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const labelsOrderBy = [
    'Ordem alfabética, A-Z',
    'Ordem alfabética, Z-A',
    'Preço, ordem crescente',
    'Preço, ordem decrescente',
    'Data, mais antiga primeiro',
    'Data, mais recente primeiro'
  ]
  const [currentOrderBy, setCurrentOrderBy] = useState(labelsOrderBy[0])

  const [isOrderByActive, setIsOrderByActive] = useState(false)

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam && categoryParam !== category) {
      setCategory(categoryParam)
    }
  }, [searchParams, category])

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
    navigate(`/products/?category=${category}&page=${pageNumber}`)
  }

  const handleCategoryChange = newCategory => {
    setCurrentPage(1)
    setCategory(newCategory)
    navigate(`/products/?category=${newCategory}`)
  }

  const setTitle = () => {
    if (category == 'all') return 'Todos os produtos'
    else return category.charAt(0).toUpperCase() + category.slice(1)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title isMenu>Menu principal</S.Title>

        <S.MenuLink onClick={() => navigate('/')}>Início</S.MenuLink>
        <S.MenuLink
          category={category}
          catalogueLink
          onClick={() => handleCategoryChange('all')}
        >
          Catálogo
        </S.MenuLink>
        <S.MenuLink
          onClick={() => setIsCategoriesActive(!isCategoriesActive)}
          isCategoriesActive={isCategoriesActive}
          category={category}
          allCategories
        >
          Todas as categorias <S.DownArrow src={i('downArrow.png')} />
        </S.MenuLink>

        <S.Categories isCategoriesActive={isCategoriesActive}>
          {categories.map(categoryItem => (
            <S.Category
              key={categoryItem.id}
              onClick={() =>
                handleCategoryChange(stringToUrl(categoryItem.name))
              }
              isCategoryActive={stringToUrl(categoryItem.name) == category}
            >
              {categoryItem.name}
            </S.Category>
          ))}
        </S.Categories>
      </S.Wrapper>

      <S.Wrapper isProducts>
        <S.Title>{setTitle()}</S.Title>

        <S.DivOrderBy
          onClick={() => setIsOrderByActive(!isOrderByActive)}
          isOrderByActive={isOrderByActive}
        >
          <label>Ordenar por: {currentOrderBy}</label>{' '}
          <S.DownArrow src={i('downArrow.png')} />
        </S.DivOrderBy>

        <S.DivLabelsOrderBy isOrderByActive={isOrderByActive}>
          {labelsOrderBy.map((orderBy, index) => (
            <S.LabelOrderBy
              key={index}
              isSelected={
                index ===
                labelsOrderBy.findIndex(element => element === currentOrderBy)
              }
            >
              {orderBy}
            </S.LabelOrderBy>
          ))}
        </S.DivLabelsOrderBy>

        <S.WrapperProducts>
          {currentProducts.map(product => (
            <CarouselItem
              key={product.id}
              isOffer={product.isOffer}
              image={product.image}
              name={product.name}
              price={product.price}
              oldPrice={product.isOffer && product.oldPrice}
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
      </S.Wrapper>
    </S.Container>
  )
}
