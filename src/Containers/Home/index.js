import React, { useState } from 'react'

import Carousel from 'react-elastic-carousel'

import * as S from './styles'

import Button from '../../components/Button'
import CarouselWrapper from '../../components/CarouselWrapper'

const i = (name) => {
  return require('../../assets/' + name)
}

function Home () {
  const [firstLoad, setFirstLoad] = useState(false)

  return (
    <S.Container>
      <S.Header>
        <S.MainHeader>
          <S.Logo src={i('logo.png')} alt='logo' />
          <S.DivInput>
            <S.Input placeholder='O que está buscando?'/>
            <S.SearchInputButton><S.Magnifying src={i('magnifying.png')} alt='magnifying-glass-icon' /></S.SearchInputButton>
          </S.DivInput>

          <S.DivHeaderIcons>
            <S.Icons src={i('person.png')} alt='icone-person' /><S.AIcons><S.LabelLogin>Entrar / Cadastrar</S.LabelLogin><br /> Minha conta <S.DownArrow src={i('downArrow.png')}/></S.AIcons>
            <S.Icons src={i('bag.svg')} alt='icone-sacola' /><S.AIcons>Meus pedidos</S.AIcons>
            <S.Icons src={i('cart.svg')} alt='icone-carrinho' /><S.AIcons>Carrinho</S.AIcons>
          </S.DivHeaderIcons>
        </S.MainHeader>

        <S.HeaderSections>
          <S.ASections>Início</S.ASections>
          <S.ASections>Catálogo</S.ASections>
          <S.ASections className='ACategoriasHeader'>Categorias <S.DownArrow src={i('downArrow.png')} /></S.ASections>
        </S.HeaderSections>

        <S.HeaderBar src={i('bar.png')}/>
      </S.Header>

      <S.Main>
        <S.MainImage src={i('banner.png')}/>

        <S.CategoriesWrapper>
            <S.CategoryItem>
              <S.CategoryImage src={i('offerCategory.png')} alt="offer-category-icon" className="offerImage"/>
              <S.CategoryDescription className='offerDescription'>Ofertas <S.RightArrowCategory src={i('rightArrow.png')} alt='right-arrow-icon'/></S.CategoryDescription>
            </S.CategoryItem>

            <S.CategoryItem firstLoad={firstLoad} onMouseEnter={() => setFirstLoad(false)}>
              <S.CategoryImage src={i('feminineCategory.png')} alt="feminine-category-icon" className="feminineImage"/>
              <S.CategoryDescription className='feminineDescription'>Feminino <S.RightArrowCategory src={i('rightArrow.png')} alt='right-arrow-icon'/></S.CategoryDescription>
            </S.CategoryItem>

            <S.CategoryItem firstLoad={firstLoad} onMouseEnter={() => setFirstLoad(false)}>
              <S.CategoryImage src={i('masculineCategory.png')} alt="masculine-category-icon" className="masculineImage"/>
              <S.CategoryDescription className="masculineDescription">Masculino <S.RightArrowCategory src={i('rightArrow.png')} alt='right-arrow-icon'/></S.CategoryDescription>
            </S.CategoryItem>

            <S.CategoryItem firstLoad={firstLoad} onMouseEnter={() => setFirstLoad(false)}>
              <S.CategoryImage src={i('ambientCategory.png')} alt="ambient-category-icon" className="ambientImage"/>
              <S.CategoryDescription className="ambientDescription">Ambiente <S.RightArrowCategory src={i('rightArrow.png')} alt='right-arrow-icon'/></S.CategoryDescription>
            </S.CategoryItem>
        </S.CategoriesWrapper>

        <CarouselWrapper title='Ofertas da semana' seeAll='Ver todos' arrow='rightArrow.png'>
          <Carousel className="Carousel" itemsToShow={5}>
            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00 <S.OldPrice>R$ 183,00</S.OldPrice></S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00 <S.OldPrice>R$ 183,00</S.OldPrice></S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00 <S.OldPrice>R$ 183,00</S.OldPrice></S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00 <S.OldPrice>R$ 183,00</S.OldPrice></S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00 <S.OldPrice>R$ 183,00</S.OldPrice></S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00 <S.OldPrice>R$ 183,00</S.OldPrice></S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>
          </Carousel>
        </CarouselWrapper>

        <CarouselWrapper isSpecialCarousel={true} title='Novidades' description='Veja outras novidades clicando no botão abaixo' button='Ver mais'>
          <Carousel className='Carousel' itemsToShow={3}>
            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 183,00 </S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 15,25  </span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 183,00 </S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 15,25  </span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 183,00 </S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 15,25  </span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 183,00 </S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 15,25  </span></S.ItemInstallment>
            </S.CarouselItem>
          </Carousel>
        </CarouselWrapper>

        <S.AboutWrapper>
          <S.AboutImage src={i('about.png')} alt='about-image' />
          <S.AboutInformation>
            <S.AboutTitle>Um pouco sobre nós</S.AboutTitle>
            <S.AboutDescription>Mari&apos;s Boutik&apos;s surgiu com o propósito de oferecer perfumes de qualidade com preços acessíveis. Cada produto é único, com fórmulas inovadoras que proporcionam ao usuário uma experiência especial.</S.AboutDescription>
            <S.AboutDescription className='SecondAboutDescription'>Gostaria de conhecer melhor nossos produtos? <br /> Clique no botão abaixo</S.AboutDescription>
            <Button>Nossos produtos</Button>
          </S.AboutInformation>
        </S.AboutWrapper>

        <S.FooterBar></S.FooterBar>
        <S.Footer>
          <S.FooterItem style={{ float: 'right', width: '70%' }}>Preços e condições de pagamento exclusivos para compras neste site oficial, podendo variar com o tempo da oferta. Evite comprar produtos mais baratos ou de outras lojas, pois você pode estar sendo enganado(a) por um golpista. Caso você compre os mesmos produtos em outras lojas, <b>não nos responsabilizamos por quaisquer problemas.</b></S.FooterItem>

          <S.FooterItem style={{ fontWeight: 700, fontSize: '14px' }}>ATENDIMENTO AO CLIENTE</S.FooterItem> <br/>

          <S.FooterItem style={{ fontSize: '14px' }} className='comunication'> <S.PaymentIcon src={i('mail.png')} alt='mail-icon' className='emailIcon'/> ENTRAR EM CONTATO (E-MAIL)</S.FooterItem> <br />
          <S.FooterItem style={{ fontSize: '14px' }} className='comunication'> <S.PaymentIcon src={i('phone.png')} alt='mail-icon' className='phoneIcon'/> +55 (11) 99556-4108 (WHATSAPP)</S.FooterItem> <br />

          <S.FooterItem className='payment'>Nós aceitamos:</S.FooterItem>
          <S.PaymentIcon src={i('pix.jpg')} alt='pix-icon'/>
          <S.PaymentIcon src={i('boleto.png')} alt='boleto-icon'/>
        </S.Footer>
      </S.Main>
    </S.Container>
  )
}

export default Home
