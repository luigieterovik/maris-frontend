import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import * as S from './styles'
import CarouselItem from '../../components/CarouselItem'
import Pagination from '../../components/Pagination'

const i = name => {
  return require('../../assets/' + name)
}

export default function Catalog() {
  const [isCategoriesActive, setIsCategoriesActive] = useState(false)
  const [category, setCategory] = useState('all')
  const [products, setProducts] = useState([
    {
      id: 1,
      isOffer: false,
      image: 'perfume.jpg',
      name: 'Perfume 1',
      price: '142,00',
      installment: '11,83',
      category: 'masculino'
    },
    {
      id: 2,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume 2',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83',
      category: 'feminino'
    },
    {
      id: 3,
      isOffer: false,
      image: 'perfume.jpg',
      name: 'Perfume 3',
      price: '142,00',
      installment: '11,83',
      category: 'ambiente'
    },
    {
      id: 4,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume 4',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83',
      category: 'infantil'
    },
    {
      id: 5,
      isOffer: false,
      image: 'perfume.jpg',
      name: 'Perfume 5',
      price: '142,00',
      installment: '11,83',
      category: 'masculino'
    },
    {
      id: 6,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume 6',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83',
      category: 'masculino'
    },
    {
      id: 7,
      isOffer: false,
      image: 'perfume.jpg',
      name: 'Perfume 7',
      price: '142,00',
      installment: '11,83',
      category: 'feminino'
    },
    {
      id: 8,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume 8',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83',
      category: 'ambiente'
    },
    {
      id: 9,
      isOffer: false,
      image: 'perfume.jpg',
      name: 'Perfume 9',
      price: '142,00',
      installment: '11,83',
      category: 'ambiente'
    },
    {
      id: 10,
      isOffer: true,
      image: 'perfume.jpg',
      name: 'Perfume 10',
      price: '142,00',
      oldPrice: '20,00',
      installment: '11,83',
      category: 'infantil'
    }
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(4)

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam && categoryParam !== category) {
      setCategory(categoryParam)
    }
  }, [searchParams, category])

  const filteredProducts =
    category === 'all'
      ? products
      : products.filter(product => product.category === category)
  const indexOfLastProduct = Math.min(
    currentPage * productsPerPage,
    filteredProducts.length
  )
  const indexOfFirstProduct = Math.max(0, indexOfLastProduct - productsPerPage)
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
    navigate(`/products/?category=${category}&page=${pageNumber}`)
  }

  const handleCategoryChange = newCategory => {
    setCurrentPage(1)
    setCategory(newCategory)
    navigate(`/products/?category=${newCategory}`)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title isMenu>Menu principal</S.Title>

        <S.MenuLink onClick={() => navigate('/')}>Início</S.MenuLink>
        <S.MenuLink catalogueLink onClick={() => handleCategoryChange('all')}>
          Catálogo
        </S.MenuLink>
        <S.MenuLink
          onClick={() => setIsCategoriesActive(!isCategoriesActive)}
          isCategoriesActive={isCategoriesActive}
        >
          Todas as categorias <S.DownArrow src={i('downArrow.png')} />
        </S.MenuLink>

        <S.Categories isCategoriesActive={isCategoriesActive}>
          <S.Category onClick={() => handleCategoryChange('masculino')}>
            Masculino
          </S.Category>
          <S.Category onClick={() => handleCategoryChange('feminino')}>
            Feminino
          </S.Category>
          <S.Category onClick={() => handleCategoryChange('ambiente')}>
            Ambiente
          </S.Category>
          <S.Category onClick={() => handleCategoryChange('infantil')}>
            Infantil
          </S.Category>
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
            totalFilteredProducts={filteredProducts.length}
          />
        </S.WrapperProducts>
      </S.Wrapper>
    </S.Container>
  )
}
