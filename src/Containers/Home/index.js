import React from 'react'

import Carousel from 'react-elastic-carousel'

import Bag from '../../assets/bag.png'
import HeaderBarImg from '../../assets/bar.png'
import Cart from '../../assets/cart.png'
import DownArrowImg from '../../assets/down-arrow.png'
import LogoImg from '../../assets/logo.png'
import Person from '../../assets/person.png'
import MainImageImg from '../../assets/teste.jpeg'

import { A, CategoriesWrapper, CategoryImg, CategoryItem, CategoryName, Container, DownArrow, Header, HeaderBar, HeaderSections, Icons, Input, Logo, Main, MainHeader, MainImage, OfferTitle } from './styles'

function Home () {
  return (
    <Container>
      <Header>
        <MainHeader>
          <Logo src={LogoImg} alt='logo' />
          <Input placeholder='O que está buscando?'/>
          <Icons src={Person} alt='icone-person' /><A>Entrar / Cadastrar <br /> Minha conta <DownArrow src={DownArrowImg}/></A>
          <Icons src={Bag} alt='icone-sacola' /><A>Meus pedidos</A>
          <Icons src={Cart} alt='icone-carrinho' /><A>Carrinho</A>
        </MainHeader>

        <HeaderSections>
          <A>Início</A>
          <A>Catálogo</A>
          <A>Categorias <DownArrow src={DownArrowImg} /></A>
        </HeaderSections>

        <HeaderBar src={HeaderBarImg}/>
      </Header>

      <Main>
        <MainImage src={MainImageImg}/>

        <CategoriesWrapper>
          <CategoryItem>
            <CategoryImg />
            <CategoryName>Feminino</CategoryName>
          </CategoryItem>

          <CategoryItem>
            <CategoryImg />
            <CategoryName>Masculino</CategoryName>
          </CategoryItem>

          <CategoryItem>
            <CategoryImg />
            <CategoryName>Unissex</CategoryName>
          </CategoryItem>

          <CategoryItem>
            <CategoryImg />
            <CategoryName>Infantil</CategoryName>
          </CategoryItem>
        </CategoriesWrapper>

        <OfferTitle>Ofertas</OfferTitle>

        <Carousel itemsToShow={4}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </Carousel>

      </Main>
    </Container>
  )
}

export default Home
