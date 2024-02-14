import React from 'react'

import Carousel from 'react-elastic-carousel'

import * as S from './styles'

import Button from '../../components/Button'
import CarouselItem from '../../components/CarouselItem'
import CarouselWrapper from '../../components/CarouselWrapper'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const i = name => {
  return require('../../assets/' + name)
}

function Home() {
  return (
    <S.Container>
      <Header></Header>

      <S.Main>
        <S.MainImage src={i('banner.png')} />

        <S.CategoriesWrapper>
          <S.CategoryItem>
            <S.CategoryImage
              src={i('offerCategory.png')}
              alt="offer-category-icon"
              className="offerImage"
            />
            <S.CategoryDescription className="offerDescription">
              Ofertas{' '}
              <S.RightArrowCategory
                src={i('rightArrow.png')}
                alt="right-arrow-icon"
              />
            </S.CategoryDescription>
          </S.CategoryItem>

          <S.CategoryItem>
            <S.CategoryImage
              src={i('feminineCategory.png')}
              alt="feminine-category-icon"
              className="feminineImage"
            />
            <S.CategoryDescription className="feminineDescription">
              Feminino{' '}
              <S.RightArrowCategory
                src={i('rightArrow.png')}
                alt="right-arrow-icon"
              />
            </S.CategoryDescription>
          </S.CategoryItem>

          <S.CategoryItem>
            <S.CategoryImage
              src={i('masculineCategory.png')}
              alt="masculine-category-icon"
              className="masculineImage"
            />
            <S.CategoryDescription className="masculineDescription">
              Masculino{' '}
              <S.RightArrowCategory
                src={i('rightArrow.png')}
                alt="right-arrow-icon"
              />
            </S.CategoryDescription>
          </S.CategoryItem>

          <S.CategoryItem>
            <S.CategoryImage
              src={i('ambientCategory.png')}
              alt="ambient-category-icon"
              className="ambientImage"
            />
            <S.CategoryDescription className="ambientDescription">
              Ambiente{' '}
              <S.RightArrowCategory
                src={i('rightArrow.png')}
                alt="right-arrow-icon"
              />
            </S.CategoryDescription>
          </S.CategoryItem>
        </S.CategoriesWrapper>

        <CarouselWrapper
          title="Ofertas da semana"
          seeAll="Ver todos"
          arrow="rightArrow.png"
        >
          <Carousel className="Carousel" itemsToShow={5}>
            <CarouselItem
              isOffer={true}
              image="perfume.jpg"
              name="Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino"
              price="142,00"
              oldPrice="183,00"
              installment="11,83"
            />

            <CarouselItem
              isOffer={true}
              image="perfume.jpg"
              name="Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino"
              price="142,00"
              oldPrice="183,00"
              installment="11,83"
            />

            <CarouselItem
              isOffer={true}
              image="perfume.jpg"
              name="Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino"
              price="142,00"
              oldPrice="183,00"
              installment="11,83"
            />

            <CarouselItem
              isOffer={true}
              image="perfume.jpg"
              name="Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino"
              price="142,00"
              oldPrice="183,00"
              installment="11,83"
            />

            <CarouselItem
              isOffer={true}
              image="perfume.jpg"
              name="Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino"
              price="142,00"
              oldPrice="183,00"
              installment="11,83"
            />

            <CarouselItem
              isOffer={true}
              image="perfume.jpg"
              name="Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino"
              price="142,00"
              oldPrice="183,00"
              installment="11,83"
            />
          </Carousel>
        </CarouselWrapper>

        <CarouselWrapper
          isSpecialCarousel={true}
          title="Novidades"
          description="Veja outras novidades clicando no botão abaixo"
          button="Ver mais"
        >
          <Carousel className="Carousel" itemsToShow={3}>
            <CarouselItem
              image="perfume.jpg"
              name="Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino"
              price="183,00"
              installment="15,25"
            />

            <CarouselItem
              image="perfume.jpg"
              name="Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino"
              price="183,00"
              installment="15,25"
            />

            <CarouselItem
              image="perfume.jpg"
              name="Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino"
              price="183,00"
              installment="15,25"
            />

            <CarouselItem
              image="perfume.jpg"
              name="Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino"
              price="183,00"
              installment="15,25"
            />
          </Carousel>
        </CarouselWrapper>

        <S.AboutWrapper>
          <S.AboutImage src={i('about.png')} alt="about-image" />
          <S.AboutInformation>
            <S.AboutTitle>Um pouco sobre nós</S.AboutTitle>
            <S.AboutDescription>
              Mari&apos;s Boutik&apos;s surgiu com o propósito de oferecer
              perfumes de qualidade com preços acessíveis. Cada produto é único,
              com fórmulas inovadoras que proporcionam ao usuário uma
              experiência especial.
            </S.AboutDescription>
            <S.AboutDescription className="SecondAboutDescription">
              Gostaria de conhecer melhor nossos produtos? <br /> Clique no
              botão abaixo
            </S.AboutDescription>
            <Button>Nossos produtos</Button>
          </S.AboutInformation>
        </S.AboutWrapper>

        <Footer></Footer>
      </S.Main>
    </S.Container>
  )
}

export default Home
