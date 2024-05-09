import styled, { css } from 'styled-components'

export const CarouselItem = styled.div`
  width: 230px;
  height: 400px;

  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

  position: relative;

  padding: 20px;
  margin: 10px 0;

  &:hover {
    transition: transform 0.3s ease-in-out;
    transform: translateY(-10px);
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
  &:not(:hover) {
    transition: transform 0.3s ease-in-out;
  }

  ${props =>
    props.isCatalogue &&
    css`
      width: 23%;

      ${ItemName} {
        font-size: 14px;
      }

      ${ItemPrice} {
        font-size: 18px;
      }

      ${OldPrice} {
        font-size: 12px;
      }

      ${ItemInstallment} {
        font-size: 14px;
      }
    `}
`

export const ItemPrice = styled.p`
  font-weight: 600;
  font-size: 19px;
  color: ${props => (props.isOffer ? '#0DB100' : 'black')};
`

export const ItemImage = styled.img`
  max-height: 50%;
  max-width: 90%;

  border-radius: 15px;

  align-self: center;
`

export const ItemName = styled.p`
  margin: 10px 0 20px;

  font-size: 15px;
`

export const OldPrice = styled.span`
  color: gray;
  font-size: 12px;
  text-decoration: line-through;
  font-weight: 400;
  margin-left: 5px;
  opacity: 0.8;
`

export const ItemInstallment = styled.label`
  font-size: 15px;
`

export const OfferTag = styled.div`
  img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(6572%)
      hue-rotate(347deg) brightness(107%) contrast(101%);
    height: 8px;
    margin-right: 3px;
    transform: rotate(-90deg);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  background-color: #0db100;
  border-radius: 100px;
  height: 18px;
  width: fit-content;
  padding: 0 8px;
  color: white;
  font-weight: 600;
  font-size: 10px;
  position: absolute;
  top: 10px;
  left: 5px;
`
