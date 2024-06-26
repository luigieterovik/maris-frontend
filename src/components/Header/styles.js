import styled, { css } from 'styled-components'

export const Header = styled.header`
  height: 125px;
  width: auto;
  display: flex;
  flex-direction: column;
`

export const QuantidadeProdutosCarrinho = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100px;

  p {
    font-size: 9px;
    transform: translateY(3px);
    text-align: center;
  }

  color: white;
  background-color: #9c19e8;
  font-size: 10px;
  font-weight: 700;

  position: absolute;
  top: -5px;
  right: 70px;

  transition: all 200ms ease;
`

export const HeaderTop = styled.div`
  height: 90%;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.img`
  height: 30px;
  margin: 0 30px;
`

export const DivHeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  right: 20px;

  .carrinhoHeaderDiv:hover {
    ${QuantidadeProdutosCarrinho} {
      transform: scale(1.2);
    }
  }
`

export const Icons = styled.img`
  height: 25px;

  margin: 0 10px 0 30px;
`

export const DownArrow = styled.img`
  width: 15px;
  margin-left: 3px;
  position: relative;
  top: 3px;
`

export const DivInput = styled.div`
  height: 40px;
  width: 500px;

  border-radius: 50px;

  margin: 0 auto;
  padding: 0 5px 0 18px;

  background-color: #f1f1f1;

  display: flex;
  align-items: center;
`

export const Input = styled.input`
  height: 100%;
  width: 87%;
  padding-right: 15px;
  border: none;
  outline: none;

  background-color: #f1f1f1;

  &::placeholder {
    color: black;
  }
`

export const SearchInputButton = styled.button`
  border-radius: 50px;
  border: none;

  height: 80%;
  width: 13%;

  background-color: #9c19e8;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 200ms;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    cursor: pointer;
    opacity: 0.7;
  }
`

export const Magnifying = styled.img`
  height: 50%;
  rotate: -90deg;
`

export const ASections = styled.a`
  font-size: 14px;
  font-weight: 500;
  height: 100%;
  margin: 20px 30px;

  &:hover {
    cursor: pointer;
    color: #05004d;
    opacity: 0.9;
  }
`

export const PopupCategories = styled.div`
  position: absolute;
  top: 55px;
  right: 480px;
  background-color: white;
  width: 150px;
  transform: scale(0.8);
  opacity: 0;
  visibility: hidden;

  padding: 15px 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 200ms;
  z-index: 1;

  &:hover {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  & li {
    list-style-type: none;
    transition: all 200ms;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
      color: #120fcc;
    }
  }
`

export const Triangle = styled.img`
  position: absolute;
  top: -10px;
  left: 45%;
  width: 35px;
  height: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

export const LabelLogin = styled.label`
  font-weight: 400;
  font-size: 13px;
  color: blue;
  user-select: none;
`

export const LoginWrapper = styled.div`
  opacity: 0;
  transition: all 150ms;
  visibility: hidden;
  transform: scale(0.8);
  cursor: auto;
  position: absolute;
  top: 50px;
  left: -40px;
  width: 300px;
  height: fit-content;
  padding: 30px 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1;

  ${props =>
    props.wasClicked &&
    css`
      transform: scale(1);
      visibility: visible;
      opacity: 1;
    `}

  ${props =>
    props.userData &&
    css`
      display: none;
    `}
`

export const AIcons = styled.a`
  font-weight: 600;
  font-size: 14px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  span {
    position: relative;
    bottom: 7px;
  }

  .labelMinhaConta {
    color: black;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }

  ${({ userData }) =>
    userData &&
    css`
      max-width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;

      & > ${LabelLogin} {
        color: blue;
        font-weight: 500;
        font-size: 12px;

        & > ${DownArrow} {
          display: none;
        }
      }

      & > .upperLabel {
        color: black;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap; /* impede que o texto quebre em várias linhas */
        overflow: hidden; /* esconde o texto que ultrapassa a largura */
        text-overflow: ellipsis; /* mostra "..." quando o texto é cortado */
      }
    `}
`

export const HeaderBottom = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .ACategoriasHeader:hover {
    color: blue;
    opacity: 0.8;
    transition: all 200ms;

    ${DownArrow} {
      filter: brightness(0) saturate(100%) invert(7%) sepia(100%)
        saturate(7214%) hue-rotate(245deg) brightness(112%) contrast(138%);
    }

    &:hover + ${PopupCategories} {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const HeaderBar = styled.img`
  width: 100%;
  height: 6px;
`
