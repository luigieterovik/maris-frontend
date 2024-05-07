import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 50px 60px;
  display: flex;
  flex-direction: row;
`

export const LeftWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 25px;
  transition: all 200ms;
  position: relative;
`

export const ImageWrapper = styled.div`
  display: flex;
  padding: 25px 25px 0;
`

export const MainImage = styled.img`
  width: 80%;
  border-radius: 20px;
  margin-left: auto;
`

export const AllMiniImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: hidden;
  max-height: 400px;
  margin-right: 30px;
`

export const MiniImage = styled.img`
  width: 60px;
  border-radius: 5px;
  cursor: pointer;
`

export const Division = styled.div`
  height: 1px;
  border-bottom: 2px solid #e7e7e7;
  width: 100%;
  margin: 30px 0;
`

export const ProductDescription = styled.p`
  font-size: 15px;
  margin-top: 20px;
`

export const DescriptionWrapper = styled.div`
  padding: 0 30px 25px;
`

export const RightWrapper = styled.div`
  width: 42%;
  background-color: white;
  margin-left: auto;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 25px;
`

export const ProductTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;

  img {
    height: 20px;
    transform: translateY(3px);
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const PriceDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Price = styled.label`
  color: green;
  font-size: 24px;
  font-weight: 700;
`

export const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  border-radius: 100px;
  background-color: #E8E9EF;
  margin: 30px 0 10px;
`

export const ChangeQuantity = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 600;
  width: 80px;
  cursor: pointer;
  opacity: 0.6;

  ${props => props.quantity === 1 && css`
    visibility: hidden;
  ` }
`

export const BuyButton = styled.button`
  height: 50px;
  width: 100%;
  color: white;
  background-color: #9C19E8;
  border-radius: 100px;
  border: none;
  font-size: 16px;
  font-weight: 500;
`