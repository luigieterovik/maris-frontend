import React, { useRef, useState, useEffect } from 'react'
import * as S from './styles'

import Login from '../Login'

const i = name => {
  return require('../../assets/' + name)
}

export default function Header() {
  const [wasLoginClicked, setWasLoginClicked] = useState(false)

  const loginRef = useRef()
  const labelLoginRef = useRef()

  window.addEventListener('click', e => {
    if (e.target !== loginRef.current && e.target !== labelLoginRef.current) {
      setWasLoginClicked(false)
    }
  })

  const [activeCategories, setActiveCategories] = useState(false)

  return (
    <S.Header>
      <S.MainHeader>
        <S.Logo src={i('logo.png')} alt="logo" />
        <S.DivInput>
          <S.Input placeholder="O que está buscando?" />
          <S.SearchInputButton>
            <S.Magnifying
              src={i('magnifying.png')}
              alt="magnifying-glass-icon"
            />
          </S.SearchInputButton>
        </S.DivInput>

        <S.DivHeaderIcons>
          <S.Icons src={i('person.png')} alt="icone-person" />
          <S.AIcons>
            <S.LabelLogin>Entrar / Cadastrar</S.LabelLogin>
            <br />
            <S.LabelLogin
              ref={labelLoginRef}
              className="labelMinhaConta"
              onClick={() => {
                setWasLoginClicked(!wasLoginClicked)
              }}
            >
              Minha conta <S.DownArrow src={i('downArrow.png')} />
            </S.LabelLogin>

            <S.LoginWrapper
              wasClicked={wasLoginClicked}
              ref={loginRef}
              onClick={e => {
                e.stopPropagation()
              }}
            >
              <Login accountComponent="login" isPopup />
            </S.LoginWrapper>
          </S.AIcons>

          <S.AIcons>
            <S.Icons src={i('bag.svg')} alt="icone-sacola" />{' '}
            <span>Meus pedidos</span>
          </S.AIcons>

          <S.AIcons className="carrinhoHeaderDiv">
            <S.Icons src={i('cart.svg')} alt="icone-carrinho" />
            <S.QuantidadeProdutosCarrinho>
              <p>0</p>
            </S.QuantidadeProdutosCarrinho>{' '}
            <span style={{ marginLeft: '5px' }}>Carrinho</span>
          </S.AIcons>
        </S.DivHeaderIcons>
      </S.MainHeader>

      <S.HeaderSections>
        <S.ASections>Início</S.ASections>
        <S.ASections>Catálogo</S.ASections>
        <S.ASections className="ACategoriasHeader">
          Categorias <S.DownArrow src={i('downArrow.png')} />
        </S.ASections>
        <S.PopupCategories>
          <S.Triangle src={i('triangle.png')} />
          <ul>
            <li>Ofertas</li>
            <li>Feminino</li>
            <li>Masculino</li>
            <li>Ambiente</li>
          </ul>
        </S.PopupCategories>
      </S.HeaderSections>

      <S.HeaderBar src={i('bar.png')} />
    </S.Header>
  )
}
