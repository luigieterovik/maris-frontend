import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ProductsWrapper = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 20px;
  margin: 20px 0;
  padding: 20px 0 15px 0px;
`

export const Title = styled.h2`
  margin-left: 30px;
`

export const WrapperProducts = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-left: 15px;
  padding-left: 20px;
`

export const Description = styled.p`
  font-size: 16px;
  margin: 15px 0 40px;
`

export const NullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
  background-color: #f7f7f7;
`

export const InputWrapper = styled.div`
  width: 400px;
  height: 45px;
  display: flex;
  position: relative;
  border-radius: 100px;

  input:focus {
    border: 1px solid #ae45eb;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    transform: translateY(-8px);
    font-size: 11px;
  }
`

export const Magnifying = styled.img`
  height: 20px;
  rotate: -90deg;
`

export const Input = styled.input`
  width: 85%;
  height: 100%;
  align-self: left;
  padding: 12px 20px 0;
  font-size: 15px;
  border-radius: 30px 0 0 30px;
  outline: none;
  border: none;
  background-color: #EDEDED;
`

export const InputPlaceholder = styled.label`
  position: absolute;
  top: 12px;
  left: 20px;
  color: black;
  font-size: 14px;
  transition: all 100ms ease-in-out;
  pointer-events: none;
`

export const InputButton = styled.button`
  cursor: pointer;
  width: 15%;
  height: 100%;
  border-radius: 0 30px 30px 0;
  border: none;
  background-color: #9c19e8;
  transition: opacity 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`

export const LinkBackHome = styled.p`
  color: blue;
  font-size: 14px;
  margin-top: 25px;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    color: #00337E;
    text-decoration: underline;
  }
`

export const Division = styled.div`
  height: 1px;
  border-bottom: 2px solid #E7E7E7;
  width: 100%;
  margin: 20px 0;
`