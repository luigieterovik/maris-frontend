import styled, { css } from 'styled-components'

export const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  border-radius: 100px;
  background-color: #e8e9ef;
  margin: 30px 0 10px;

  label {
    margin: 0 5px !important;
    font-size: 12px;
    cursor: auto;
  } 

  ${props =>
    props.isCart &&
    css`
      margin: 0;

      button {
        width: 30%;
        font-size: 18px;
        font-weight: 500;
      }
    `}
`

export const ChangeQuantity = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 600;
  width: 80px;
  cursor: pointer;
  opacity: 0.6;

  transition: 200ms;

  &:hover {
    opacity: 1;
  }

  ${props =>
    props.quantity === 1 &&
    css`
      transition: none;
      visibility: hidden;
    `}
`
