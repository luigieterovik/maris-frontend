import React from 'react'
import * as S from './styles'

const i = (name) => {
  return require('../../assets/' + name)
}

function Header () {
  return (
        <S.Header>
        <S.MainHeader>
          <S.Logo src={i('logo.png')} alt='logo' />
          <S.DivInput>
            <S.Input placeholder='O que está buscando?'/>
            <S.SearchInputButton><S.Magnifying src={i('magnifying.png')} alt='magnifying-glass-icon' /></S.SearchInputButton>
          </S.DivInput>

          <S.DivHeaderIcons>
            <S.Icons src={i('person.png')} alt='icone-person' /><S.AIcons><S.LabelLogin>Entrar / Cadastrar</S.LabelLogin><br /> Minha conta <S.DownArrow src={i('downArrow.png')}/></S.AIcons>

            <S.AIcons><S.Icons src={i('bag.svg')} alt='icone-sacola' /> <span>Meus pedidos</span></S.AIcons>

            <S.AIcons className='carrinhoHeaderDiv'><S.Icons src={i('cart.svg')} alt='icone-carrinho' /><S.QuantidadeProdutosCarrinho>0</S.QuantidadeProdutosCarrinho> <span style={{ marginLeft: '5px' }}>Carrinho</span></S.AIcons>
          </S.DivHeaderIcons>
        </S.MainHeader>

        <S.HeaderSections>
          <S.ASections>Início</S.ASections>
          <S.ASections>Catálogo</S.ASections>
          <S.ASections className='ACategoriasHeader'>Categorias <S.DownArrow src={i('downArrow.png')} /></S.ASections>
        </S.HeaderSections>

        <S.HeaderBar src={i('bar.png')}/>
      </S.Header>
  )
}

export default Header
