import React from 'react'

import Carousel from 'react-elastic-carousel'

import Bag from '../../assets/bag.png'
import MagnifyingImg from '../../assets/magnifying.png'
import HeaderBarImg from '../../assets/bar.png'
import Cart from '../../assets/cart.png'
import DownArrowImg from '../../assets/down-arrow.png'
import FooterBarImg from '../../assets/footerBar.png'
import LogoImg from '../../assets/logo.png'
import Person from '../../assets/person.png'
import MainImageImg from '../../assets/teste.jpeg'

import { A, AboutDescription, AboutTitle, AboutWrapper, CarouselAllItems, CarouselTitle, CarouselWrapper, Container, DivInput, DownArrow, FooterBar, Header, HeaderBar, HeaderSections, Icons, Input, Logo, Main, MainHeader, MainImage, Magnifying, SearchInputButton } from './styles'

function Home () {
  return (
    <Container>
      <Header>
        <MainHeader>
          <Logo src={LogoImg} alt='logo' />
          <DivInput>
            <Input placeholder='O que está buscando?'/>
            <SearchInputButton><Magnifying src={MagnifyingImg} alt='magnifying-glass-icon' /></SearchInputButton>
          </DivInput>
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

        <CarouselWrapper>
          <CarouselTitle>Ofertas</CarouselTitle>
          <CarouselAllItems>Ver todos</CarouselAllItems>
          <Carousel itemsToShow={4}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </Carousel>
        </CarouselWrapper>

        <CarouselWrapper>
          <CarouselTitle>Feminino</CarouselTitle>
          <CarouselAllItems>Ver todos</CarouselAllItems>
          <Carousel itemsToShow={4}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </Carousel>
        </CarouselWrapper>

        <CarouselWrapper>
          <CarouselTitle>Masculino</CarouselTitle>
          <CarouselAllItems>Ver todos</CarouselAllItems>
          <Carousel itemsToShow={4}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </Carousel>
        </CarouselWrapper>

        <CarouselWrapper>
          <CarouselTitle>Unissex</CarouselTitle>
          <CarouselAllItems>Ver todos</CarouselAllItems>
          <Carousel itemsToShow={4}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </Carousel>
        </CarouselWrapper>

        <CarouselWrapper>
          <CarouselTitle>Infantil</CarouselTitle>
          <CarouselAllItems>Ver todos</CarouselAllItems>
          <Carousel itemsToShow={4}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </Carousel>
        </CarouselWrapper>

        <CarouselWrapper>
          <CarouselTitle>Ambiente</CarouselTitle>
          <CarouselAllItems>Ver todos</CarouselAllItems>
          <Carousel itemsToShow={4}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </Carousel>
        </CarouselWrapper>

        <AboutWrapper>
          <AboutTitle>Sobre nós</AboutTitle>
          <AboutDescription>Somos uma empresa top de perfumes</AboutDescription>
        </AboutWrapper>

        <FooterBar src={FooterBarImg} alt='footer-bar-img'/>
      </Main>
    </Container>
  )
}

export default Home
