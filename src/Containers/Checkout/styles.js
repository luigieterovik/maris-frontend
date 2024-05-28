import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  padding: 30px 0;
`

export const JoinDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const CheckDiv = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 30px;
  max-width: 450px;
  width: 30vw;
  height: fit-content;
`

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const CheckNumber = styled.label`
  background-color: #9c19e8;
  border-radius: 100px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white;
  font-weight: 600;
  margin-right: 5px;
`

export const Title = styled.h4`
  color: #9c19e8;
  font-size: 17px;
  margin-bottom: 5px;
`

export const Description = styled.p`
  opacity: 0.8;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const FieldLabel = styled.label`
  font-size: 11px;
  margin: 15px 0 3px;
  display: inline-block;
`

export const FieldDiv = styled.div`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid rgb(180, 180, 180);
  display: flex;
  flex-direction: row;

  img {
    position: absolute;
  }

  ${({ isPhoneNumber }) =>
    isPhoneNumber &&
    css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        background-color: #f4f6f8;
        border-radius: 5px 0 0 5px;
        width: 30%;
        border-right: 1px solid rgb(180, 180, 180);
      }
    `}
`

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;
  height: 100%;
  outline: none;
  padding: 0 15px;
  font-size: 11px;
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 30px;
  background-color: #9c19e8;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: 200ms;
    opacity: 0.8;
  }

  img {
    height: 12px;
    width: 12px;
    margin-left: 10px;
    transform: rotate(180deg);
    filter: brightness(0) saturate(100%) invert(99%) sepia(8%) saturate(111%)
      hue-rotate(221deg) brightness(113%) contrast(100%);
  }
`

export const NewAddress = styled.a`
  color: #0db100;
  font-size: 12px;
  font-weight: 600;
  margin: 15px 0;
`

export const AdressesWrapper = styled.div`
  width: 100%;
`

export const Address = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #f4f6f8;
  border: solid 1px black;
  border-radius: 5px;

  input {
    margin-right: 10px;
    color: black;
  }

  /* Estiliza o botão de rádio personalizado */
  input[type='radio'] + label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #000; /* Cor da borda */
    background-color: #fff; /* Cor de fundo padrão */
    margin-right: 5px; /* Espaçamento entre o botão e o texto */
  }

  input[type='radio']:checked + label::before {
    background-color: red; /* Nova cor de fundo quando selecionado */
  }

  h4 {
    font-size: 11px;
    font-weight: 600;
  }

  p {
    font-size: 11px;
  }
`

export const Division = styled.div``

export const DeliveryWrapper = styled.div``

export const InlineDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;

  p {
    margin: 43px 0 0 10px;
    font-size: 11px;
    white-space: nowrap;
  }

  ${({ neighborhood }) =>
    neighborhood &&
    css`
      & > div:first-child {
        flex: 0 0 30%;
      }
      & > div:last-child {
        flex: calc(0 0 70% - 10px);
      }
    `}

  ${({ isCep }) =>
    isCep &&
    css`
      & > div:first-child {
        flex: 0 0 50%;
      }
    `}
`
