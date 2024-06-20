import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const PixDiv = styled.div`
  background-color: white;
  width: 100%;

  border-radius: 5px;

  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ${({ loading }) => loading &&css`
    flex-direction: row;
  `}
`

export const Description = styled.p`
  font-size: 13px;
  font-weight: 600;

  span {
    color: #725bc2;
    font-weight: 700;
  }

  img {
    margin-right: 5px;
    height: 20px;
    filter: brightness(0) saturate(100%) invert(44%) sepia(0%) saturate(65%)
      hue-rotate(197deg) brightness(88%) contrast(89%);
  }

  ${({ camera }) =>
    camera &&
    css`
      display: flex;
      justify-content: center;
      color: #666666;
      margin-top: 20px;
    `}

`

export const QrCode = styled.img`
  height: 100% !important;
  width: 100% !important;
  margin: 0 auto;
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 10px;
  background-color: #9c19e8;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    height: 13px;
    margin-right: 10px;
    filter: brightness(0) saturate(100%) invert(99%) sepia(1%) saturate(627%)
      hue-rotate(77deg) brightness(116%) contrast(100%);
  }

  ${({ close }) => close &&css`
    width: 80px;
    height: 30px;
    margin: 0 0 10px;
    font-size: 12px;
    font-weight: 500;
  `}
`

export const LoadingImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`
