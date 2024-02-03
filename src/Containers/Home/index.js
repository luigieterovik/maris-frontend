import React from 'react'

import Carousel from 'react-elastic-carousel'

import * as S from './styles'

const i = (name) => {
  return require('../../assets/' + name)
}

function Home () {
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

            <S.CategoryItem>
              <S.CategoryImage src={i('feminineCategory.png')} alt="feminine-category-icon" className="feminineImage"/>
              <S.CategoryDescription className='feminineDescription'>Feminino <S.RightArrowCategory src={i('rightArrow.png')} alt='right-arrow-icon'/></S.CategoryDescription>
            </S.CategoryItem>

            <S.CategoryItem>
              <S.CategoryImage src={i('masculineCategory.png')} alt="masculine-category-icon" className="masculineImage"/>
              <S.CategoryDescription className="masculineDescription">Masculino <S.RightArrowCategory src={i('rightArrow.png')} alt='right-arrow-icon'/></S.CategoryDescription>
            </S.CategoryItem>

            <S.CategoryItem>
              <S.CategoryImage src={i('ambientCategory.png')} alt="ambient-category-icon" className="ambientImage"/>
              <S.CategoryDescription className="ambientDescription">Ambiente <S.RightArrowCategory src={i('rightArrow.png')} alt='right-arrow-icon'/></S.CategoryDescription>
            </S.CategoryItem>
        </S.CategoriesWrapper>

        <S.CarouselWrapper>
          <S.CarouselTitle>Ofertas da semana
          <S.CarouselSeeAll>Ver todos <S.RightArrowSeeAll src={i('rightArrow.png')} alt='right-arrow-icon'/></S.CarouselSeeAll></S.CarouselTitle>
          <S.CarouselBar></S.CarouselBar>

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
        </S.CarouselWrapper>

        <S.SpecialCarouselWrapper>
          <S.SpecialCarouselInformations>
            <S.SpecialCarouselTitle>Novidades</S.SpecialCarouselTitle>
            <S.SpecialCarouselDescription>Veja outras novidades clicando no botão abaixo</S.SpecialCarouselDescription>
            <S.SpecialCarouselButton>Ver mais</S.SpecialCarouselButton>
          </S.SpecialCarouselInformations>

          <Carousel className='Carousel' itemsToShow={3}>
            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00 </S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00 </S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00 </S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={i('perfume.jpg')} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00 </S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>
          </Carousel>
        </S.SpecialCarouselWrapper>

        <S.AboutWrapper>
          <S.AboutTitle>Sobre nós</S.AboutTitle>
          <S.AboutDescription>Somos uma empresa top de perfumes</S.AboutDescription>
        </S.AboutWrapper>

        <S.FooterBar src={i('footerBar.png')} alt='footer-bar-img'/>
      </S.Main>
    </S.Container>
  )
}

export default Home
