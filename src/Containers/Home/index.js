import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Carousel from 'react-elastic-carousel'

import * as S from './styles'

import Button from '../../components/Button'
import CarouselItem from '../../components/CarouselItem'
import CarouselWrapper from '../../components/CarouselWrapper'
import CategoryItem from '../../components/CategoryItem'

import { stringToUrl } from '../../utils/functions'
import { categoriesState, productsState } from '../../utils/states'

const i = name => {
  return require('../../assets/' + name)
}

export default function Home() {
  const { categories } = categoriesState()
  const { products } = productsState()

  return (
    <S.Main>
      <S.MainImage src={i('banner.png')} />

      <S.CategoriesWrapper>
        {categories.map(category => (
          <CategoryItem
            key={category.id} 
            image={category.image}
            description={category.name}
            navigate={stringToUrl(category.name)}
          />
        ))}
      </S.CategoriesWrapper>

      <CarouselWrapper
        title="Ofertas da semana"
        seeAll="Ver todos"
        arrow="rightArrow.png"
      >
        <Carousel className="Carousel" itemsToShow={5}>
          {products.map(product => (
            product.isOffer && (
              <CarouselItem isOffer key={product.id} image={product.image} name={product.name} price={product.price} oldPrice={product.oldPrice} installment={product.installment}/>
            )
          ))}
        </Carousel>
      </CarouselWrapper>

      <CarouselWrapper
        isSpecialCarousel
        title="Novidades"
        description="Veja outras novidades clicando no botão abaixo"
        button="Ver mais"
      >
        <Carousel className="Carousel" itemsToShow={3}>
          {products.map(product => (
            product.isOffer || (
              <CarouselItem key={product.id} image={product.image} name={product.name} price={product.price} installment={product.installment} />
            )
          ))}
        </Carousel>
      </CarouselWrapper>

      <S.AboutWrapper>
        <S.AboutImage src={i('about.png')} alt="about-image" />
        <S.AboutInformation>
          <S.AboutTitle>Um pouco sobre nós</S.AboutTitle>
          <S.AboutDescription>
            Mari&apos;s Boutik&apos;s surgiu com o propósito de oferecer
            perfumes de qualidade com preços acessíveis. Cada produto é único,
            com fórmulas inovadoras que proporcionam ao usuário uma experiência
            especial.
          </S.AboutDescription>
          <S.AboutDescription className="SecondAboutDescription">
            Gostaria de conhecer melhor nossos produtos? <br /> Clique no botão
            abaixo
          </S.AboutDescription>
          <Button>Nossos produtos</Button>
        </S.AboutInformation>
      </S.AboutWrapper>
    </S.Main>
  )
}
