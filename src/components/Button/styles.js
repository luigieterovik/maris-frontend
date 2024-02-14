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

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  ${props =>
    props.isSpecialButton &&
    css`
      transition:
        background 300ms,
        color 300ms;
      background-color: white;
      color: #8500dd;

      &:hover {
        background: transparent;
        border: 2px solid white;
        color: white;
        opacity: 1;
      }
    `}
`
