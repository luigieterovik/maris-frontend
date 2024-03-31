import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true)
  //     const res = await axios.get('')
  //     setProducts()
  //     setLoading(false)
  //   }

  //   fetchProducts()
  // }, [])

  const paginate = pageNumber => setCurrentPage(pageNumber)

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
          <S.Category>Masculino</S.Category>
          <S.Category>Feminino</S.Category>
          <S.Category>Ambiente</S.Category>
          <S.Category>Infantil</S.Category>
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
          />
        </S.WrapperProducts>
      </S.Wrapper>
    </S.Container>
  )
}
