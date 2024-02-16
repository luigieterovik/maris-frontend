import styled from 'styled-components'

export const Header = styled.header`
  height: 125px;
  width: auto;

  display: flex;
  flex-direction: column;
`

export const QuantidadeProdutosCarrinho = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 10px;

  p {
    transform: translateY(3px);
    text-align: center;
  }

  color: white;
  background-color: #9c19e8;
  font-size: 10px;
  font-weight: 700;

  position: absolute;
  top: 0;
  right: 70px;

  transition: all 200ms ease;
`

export const MainHeader = styled.div`
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
  margin-left: 50px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: #05004d;
    opacity: 0.9;
  }
`

export const AIcons = styled.a`
  font-weight: 600;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }

  span {
    position: relative;
    bottom: 7px;
  }
`

export const LabelLogin = styled.label`
  font-weight: 400;
  font-size: 13px;
  color: blue;
`

export const HeaderSections = styled.div`
  height: 3vh;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 15px 0 20px;

  .ACategoriasHeader:hover {
    color: blue;
    opacity: 0.8;

    ${DownArrow} {
      filter: brightness(0) saturate(100%) invert(7%) sepia(100%)
        saturate(7214%) hue-rotate(245deg) brightness(112%) contrast(138%);
    }
  }
`

export const HeaderBar = styled.img`
  width: 100%;
  height: 6px;
`