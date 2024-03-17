import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 60px;
  display: flex;
  flex-direction: row;
`

export const Wrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  background-color: white;
  border-radius: 25px;
  padding: 20px;

  ${props =>
    props.isProducts &&
    css`
      width: 70%;
      margin-left: 50px;
    `}
`

export const Title = styled.h2`
  margin-left: 30px;
  font-size: 21px;

  ${props =>
    props.isMenu &&
    css`
      text-align: center;
      font-size: 19px;
      margin: 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    `}
`

export const MenuLink = styled.a`
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 200ms;

  ${props =>
    props.catalogueLink &&
    css`
      color: blue;
      font-weight: 600;
    `}

  &:hover {
    color: #000292;
  }
`

export const DownArrow = styled.img`
  height: 15px;
  position: relative;
  left: 5px;
  top: 2px;
`
