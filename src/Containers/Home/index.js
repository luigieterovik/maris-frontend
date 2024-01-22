import React from 'react'

import Bag from '../../assets/bag.png'
import BarImg from '../../assets/bar.png'
import Cart from '../../assets/cart.png'
import DownArrowImg from '../../assets/down-arrow.png'
import LogoImg from '../../assets/logo.png'
import Person from '../../assets/person.png'
import MainImageImg from '../../assets/teste.jpeg'

import { A, Bar, Container, DownArrow, Header, HeaderSections, Icons, Input, Logo, Main, MainHeader, MainImage } from './styles'

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
          <A>Catálogo <DownArrow src={DownArrowImg} /></A>
          <A>Categorias</A>
        </HeaderSections>

        <Bar src={BarImg}/>
      </Header>

      <Main>
        <MainImage src={MainImageImg}/>

      </Main>
    </Container>
  )
}

export default Home
