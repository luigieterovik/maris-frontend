import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useParams, useNavigate, useSearchParams } from 'react-router-dom'

import * as S from './styles'
import CarouselItem from '../../components/CarouselItem'
import Pagination from '../../components/Pagination'

const i = name => {
  return require('../../assets/' + name)
}

export default function Catalog() {
  const [isCategoriesActive, setIsCategoriesActive] = useState(false)

  const [products, setProducts] = useState([
    {
      id: 1,
      isOffer: false,
      image: 'perfume.jpg',
      name: 'Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino',
      price: '142,00',
      installment: '11,83'
    },
    {
      id: 2,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83'
    },
    {
      id: 3,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83'
    },
    {
      id: 4,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83'
    },
    {
      id: 5,
      isOffer: false,
      image: 'perfume.jpg',
      name: 'Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino',
      price: '142,00',
      installment: '11,83'
    },
    {
      id: 6,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83'
    },
    {
      id: 7,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83'
    },
    {
      id: 8,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83'
    }
  ])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(4)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const navigate = useNavigate()
  const [category, setCategory] = useState('all')

  const [queryParameters] = useSearchParams()

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
    navigate(`/products/?category=${category}&page=${pageNumber}`)
  }

  const handleCategoryChange = newCategory => {
    setCurrentPage(1)
    setCurrentPage(newCategory)
    navigate(`/products/?category=${newCategory}`)
  }

  useEffect(() => {
    setCurrentPage(queryParameters.get('page'))
  }, [])

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title isMenu>Menu principal</S.Title>

        <S.MenuLink>Início</S.MenuLink>
        <S.MenuLink catalogueLink>Catálogo</S.MenuLink>
        <S.MenuLink
          onClick={() => setIsCategoriesActive(!isCategoriesActive)}
          isCategoriesActive={isCategoriesActive}
        >
          Todas as categorias <S.DownArrow src={i('downArrow.png')} />
        </S.MenuLink>

        <S.Categories isCategoriesActive={isCategoriesActive}>
          <S.Category onClick={() => handleCategoryChange('masculino')}>Masculino</S.Category>
          <S.Category onClick={() => handleCategoryChange('feminino')}>Feminino</S.Category>
          <S.Category onClick={() => handleCategoryChange('ambiente')}>Ambiente</S.Category>
          <S.Category onClick={() => handleCategoryChange('infantil')}>Infantil</S.Category>
        </S.Categories>
      </S.Wrapper>

      <S.Wrapper isProducts>
        <S.Title>Todos os produtos</S.Title>
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
          />
        </S.WrapperProducts>
      </S.Wrapper>
    </S.Container>
  )
}
