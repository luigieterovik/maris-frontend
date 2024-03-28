import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
`

export const Pages = styled.button`
  border: none;
  background: transparent;
  color: black;
  border-radius: 3px;

  cursor: pointer;

  width: 30px;
  height: 30px;

  ${props =>
    props.isSamePage &&
    css`
      transition: all 200ms;
      background-color: #9c19e8;
      color: white;
    `}
`

export const PagesWrapper = styled.div`
  display: flex;
  gap: 5px;
`

export const PageNavigator = styled.button`
  width: 100px;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 10px;

  background: transparent;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const Arrow = styled.img`
  height: 50%;

  rotate: -90deg;

  ${props =>
    props.left &&
    css`
      rotate: 90deg;
    `};
`
