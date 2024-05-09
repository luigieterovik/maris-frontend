import styled, { css } from 'styled-components'

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 85vh;
`

export const CartImage = styled.img`
  height: 80px;
`

export const CartButton = styled.button`
  height: 50px;
  width: 250px;
  border: none;
  background-color: #9c19e8;
  color: white;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    opacity: 0.8;
  }
`

export const Container = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  padding: 50px 60px;
  display: flex;
  flex-direction: column;
`

export const ContainersWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 35px;
`

export const LeftContainer = styled.div`
  width: 70%;
  padding: 0 0 10px 0;
  border-radius: 25px;
  background-color: white;
`

export const RightContainer = styled.div``

export const LayoutDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 15px 25px;
  gap: 10px;
  align-items: center;

  & > *:nth-child(1) {
    justify-self: start;
  }

  & > *:nth-child(2) {
    justify-self: center;
  }

  & > *:nth-child(3) {
    justify-self: end;
  }

  ${props =>
    props.isProduct &&
    css`
      padding: 20px 25px;
    `}
`

export const Column = styled.label`
  font-size: 12px;
`

export const ProductColumn = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const QuantityColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;

  & > label {
    font-size: 11px;
    cursor: pointer;

    &:hover { 
      color: #e00700;
      font-weight: 500;
    }
  }
`

export const TotalColumn = styled.div`
  label {
    font-size: 12px;
  }
`

export const ProductImage = styled.img`
  max-height: 80px;
  margin-right: 10px;
`

export const ProductInformatiosDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ProductName = styled.label`
  font-size: 13px;
  margin-bottom: 5px;
  flex-wrap: wrap;
`

export const ProductPrice = styled.label`
  font-size: 12px;
  font-weight: 600;

  label {
    color: black;
    margin-left: 10px;
    font-weight: 500;
    text-decoration: line-through;
    font-size: 11px;
  }

  ${props =>
    props.hasOffer &&
    css`
      color: #0db100;
    `}
`

export const Division = styled.div`
  height: 1px;
  border-bottom: 2px solid #e7e7e7;
  width: 100%;
`
