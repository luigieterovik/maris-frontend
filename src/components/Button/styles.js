import styled, { css } from 'styled-components'

export const Button = styled.button`
  border-radius: 30px;
  border: none;

  height: 45px;
  width: 220px;

  font-size: 15px;
  font-weight: 600;

  background-color: #9c19e8;
  color: white;

  transition: all 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  ${props =>
    props.isSpecialButton &&
    css`
      border: 2px solid white;
      transition: all 300ms;
      background-color: white;
      color: #8500dd;

      &:hover {
        background: transparent;
        color: white;
        opacity: 1;
      }
    `}
`
