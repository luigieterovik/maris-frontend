import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;

  ${props =>
    props.isPopup &&
    css`
      width: 100%;
      height: 100%;

      background-color: white;
      border-radius: 10px;

      div {
        width: 90%;
      }

      .button {
        width: 90%;
      }

      label {
        font-weight: 400;
        font-size: 14px;
      }

      h2 {
        font-size: 19px;
      }

      h3 {
        margin-top: 15px;
        font-size: 14px;
      }

      p {
        font-weight: 400;
      }
      .
    `}

  ${({ recoverEmailSent, renderComponent }) =>
    recoverEmailSent &&
    renderComponent === 'recover' &&
    css`
      ${InputWrapper} {
        display: none;
      }

      ${Button} {
        display: none;
      }

      ${EmailSentMessage} {
        display: block;
        margin: 0 0 20px;
      }
    `}
`

export const Title = styled.h2`
  font-weight: 600;
`

export const Description = styled.h3`
  font-weight: 400;
  font-size: 15px;
  margin: 20px 0;
`

export const Placeholder = styled.label`
  position: absolute;
  top: 12px;

  left: 20px;
  color: black;
  font-size: 15px;

  transition: all 100ms ease-in-out;

  pointer-events: none;
`

export const InputWrapper = styled.div`
  width: 350px;
  height: 45px;
  border-radius: 100px;
  border: none;
  background-color: #ededed;
  margin-bottom: 10px;
  outline: none;
  position: relative;

  input:focus {
    border: 1px solid #ae45eb;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    transform: translateY(-10px);
    font-size: 12px;
  }

  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `}
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 20px 0;
  border-radius: 100px;
  border: none;
  background-color: #ededed;
  outline: none;
  font-size: 15px;
`

export const Button = styled.input`
  width: 350px;
  height: 45px;
  border-radius: 100px;
  border: none;
  background-color: #9c19e8;
  color: white;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.8;
  }
`

export const Link = styled.p`
  font-size: 13px;
  margin-bottom: 6px;

  a {
    color: blue;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
      color: #001a90;
      text-decoration: underline;
    }
  }
`

export const DivError = styled.div`
  background: #dc0000;
  border-radius: 10px;
  width: 300px;
  padding: 15px;
  margin-bottom: 30px;
  font-size: 12px;
  color: white;
  text-wrap: wrap;
  word-wrap: break-word;

  ${({ hasError }) =>
    hasError &&
    css`
      display: none;
    `}

  ${({ isPopup }) =>
    isPopup &&
    css`
      font-size: 11px;
      font-weight: 500;
      margin-bottom: 20px;
    `}
`

export const EmailSentMessage = styled.div`
  width: 300px;
  padding: 15px;
  font-size: 13px;
  color: #00D864;
  background-color: #DCF4E7;
  display: none;
  border-radius: 5px;
  text-align: center;
`