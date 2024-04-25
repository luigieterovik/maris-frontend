import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import CarouselItem from '../../components/CarouselItem'
import Pagination from '../../components/Pagination'

import { categoriesState, productsState } from '../../utils/states'
import { stringToUrl, offerPercentageCalculate } from '../../utils/functions'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function Catalog() {
  window.scrollTo(0, 0)

  const navigate = useNavigate()

  const { categories } = categoriesState()
  const { products } = productsState()

  const [isCategoriesActive, setIsCategoriesActive] = useState(false)
  const [category, setCategory] = useState('all')

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(4)
  // Pagination
  let filteredProducts = []
  if (category === 'all') {
    filteredProducts = products
  } else if (category === 'ofertas') {
    filteredProducts = products.filter(
      product => product.offerPercentage !== null
    )
  } else {
    filteredProducts = products.filter(product => product.category === category)
  }
  const indexOfLastProduct = Math.min(
    currentPage * productsPerPage,
    filteredProducts.length
  )
  const indexOfFirstProduct = Math.max(0, indexOfLastProduct - productsPerPage)
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  // Order by
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

  const handleClickOrderBy = orderBy => {
    setCurrentOrderBy(orderBy)
    setIsOrderByActive(false)
    navigate(
      `/products/?category=${category}&page=${currentPage}&orderBy=${orderBy}`
    )

    if (orderBy === labelsOrderBy[0])
      products.sort((a, b) => a.name.localeCompare(b.name))

    if (orderBy == labelsOrderBy[1])
      products.sort((a, b) => b.name.localeCompare(a.name))

    if (orderBy === labelsOrderBy[2]) {
      products.sort((a, b) => {
        const precoA = a.offerPercentage
          ? offerPercentageCalculate(a.price, a.offerPercentage)
          : a.price

        const precoB = b.offerPercentage
          ? offerPercentageCalculate(b.price, b.offerPercentage)
          : b.price

        return precoA - precoB
      })
    }

    if (orderBy === labelsOrderBy[3]) {
      products.sort((a, b) => {
        const precoA = a.offerPercentage
          ? offerPercentageCalculate(a.price, a.offerPercentage)
          : a.price
        const precoB = b.offerPercentage
          ? offerPercentageCalculate(b.price, b.offerPercentage)
          : b.price
        return precoB - precoA
      })
    }

    if (orderBy === labelsOrderBy[4]) {
      products.sort((a, b) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)
        return dateA - dateB
      })
    }

    if (orderBy === labelsOrderBy[5]) {
      products.sort((a, b) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)
        return dateB - dateA
      })
    }
  }

  // Params
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) setCategory(categoryParam)

    const pageParam = searchParams.get('page')
    if (pageParam) setCurrentPage(pageParam)

    const orderByParam = searchParams.get('orderBy')
    if (orderByParam) setCurrentOrderBy(orderByParam)
  }, [])

  const handleCategoryChange = newCategory => {
    setCurrentPage(1)
    setCurrentOrderBy(labelsOrderBy[0])
    setCategory(newCategory)
    navigate(`/products/?category=${newCategory}`)
  }

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
    navigate(
      `/products/?category=${category}&page=${pageNumber}&orderBy=${currentOrderBy}`
    )
  }

  // Title by category
  const setTitle = () => {
    if (category == 'all') return 'Todos os produtos'
    else return category.charAt(0).toUpperCase() + category.slice(1)
  }

  // Animation
  const labelOrderByRef = useRef()
  const divLabelsOrderByRef = useRef()

  window.addEventListener('click', e => {
    if (
      e.target !== labelOrderByRef.current &&
      e.target !== divLabelsOrderByRef.current
    ) {
      setIsOrderByActive(false)
    }
  })

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
          <label ref={labelOrderByRef}>Ordenar por: {currentOrderBy}</label>{' '}
          <S.DownArrow src={i('downArrow.png')} />
        </S.DivOrderBy>

        <S.DivLabelsOrderBy
          isOrderByActive={isOrderByActive}
          ref={divLabelsOrderByRef}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          {labelsOrderBy.map((orderBy, index) => (
            <S.LabelOrderBy
              key={index}
              isSelected={
                index ===
                labelsOrderBy.findIndex(element => element === currentOrderBy)
              }
              onClick={() => handleClickOrderBy(orderBy)}
            >
              {orderBy}
            </S.LabelOrderBy>
          ))}
        </S.DivLabelsOrderBy>
        
        <S.Division />

        <S.WrapperProducts>
          {currentProducts.map(product => (
            <CarouselItem
              key={product.id}
              offerPercentage={product.offerPercentage}
              image={product.image}
              name={product.name}
              price={product.price}
              installment={product.installment}
              isCatalogue
            />
          ))}

          <Pagination
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalProducts={filteredProducts.length}
          />
        </S.WrapperProducts>
      </S.Wrapper>
    </S.Container>
  )
}
