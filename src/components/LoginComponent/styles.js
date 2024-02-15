import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
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
  top: 13px;
  left: 20px;
  color: black;
  font-size: 15px;
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
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  border-radius: 100px;
  border: none;
  background-color: #ededed;
  outline: none;
  padding-top: 10px;
  font-size: 16px;
`

export const Button = styled.button`
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

    &:hover {
      color: #001a90;
      text-decoration: underline;
    }
  }
`
