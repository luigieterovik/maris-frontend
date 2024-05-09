import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 50px 60px;
  display: flex;
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
  color: #0db100;
  font-size: 24px;
  font-weight: 700;

  display: flex;
  align-items: center;

  div {
    img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
        saturate(6572%) hue-rotate(347deg) brightness(107%) contrast(101%);
      height: 10px;
      margin-right: 5px;
      transform: rotate(-90deg);
    }

    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    background-color: #0db100;
    border-radius: 100px;
    height: 20px;
    width: fit-content;
    padding: 0 8px;
    color: white;
    font-weight: 600;
    font-size: 12px;
  }
`

export const BuyButton = styled.button`
  height: 50px;
  width: 100%;
  color: white;
  background-color: #9c19e8;
  border-radius: 100px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    opacity: 0.8;
  }
`

export const OldPrice = styled.label`
  color: gray;
  font-size: 14px;
  opacity: 0.8;
  font-weight: 400;

  span {
    text-decoration: line-through;
  }
`

export const DiscountTag = styled.button`
  color: white;
  height: 20px;
  width: fit-content;
  padding: 0 8px;
  border-radius: 100px;
  background-color: #0db100;
  font-weight: 600;
  font-size: 12px;
  border: none;
  margin-top: 5px;
`
