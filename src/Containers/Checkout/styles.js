import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  padding: 30px 0;
`

export const JoinDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const CheckDiv = styled.form`
  background-color: white;
  border-radius: 5px;
  padding: 30px;
  max-width: 450px;
  width: 25vw;
  height: fit-content;
`

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const CheckNumber = styled.label`
  background-color: #9c19e8;
  border-radius: 100px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white;
  font-weight: 600;
  margin-right: 5px;
`

export const Title = styled.h4`
  color: #9c19e8;
  font-size: 17px;
  margin-bottom: 5px;
`

export const Description = styled.p`
  opacity: 0.8;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const FieldLabel = styled.label`
  font-size: 11px;
  margin: 15px 0 3px;
  display: inline-block;
`

export const FieldDiv = styled.div`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid rgb(180, 180, 180);
  display: flex;
  flex-direction: row;

  img {
    position: absolute;
  }

  ${({ isPhoneNumber }) =>
    isPhoneNumber &&
    css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        background-color: #f4f6f8;
        border-radius: 5px 0 0 5px;
        width: 60px;
        border-right: 1px solid rgb(180, 180, 180);
      }
    `}

  ${({ mask }) =>
    mask &&
    css`
      input {
        width: 100%;
        border: none;
        border-radius: 5px;
        height: 100%;
        outline: none;
        padding: 0 15px;
        font-size: 11px;
      }
    `}
`

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;
  height: 100%;
  outline: none;
  padding: 0 15px;
  font-size: 11px;
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 30px;
  background-color: #9c19e8;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: 200ms;
    opacity: 0.8;
  }

  ${({ payment }) =>
    payment ||
    css`
      img {
        height: 12px;
        width: 12px;
        margin-left: 10px;
        transform: rotate(180deg);
        filter: brightness(0) saturate(100%) invert(99%) sepia(8%)
          saturate(111%) hue-rotate(221deg) brightness(113%) contrast(100%);
      }
    `}

  ${({ payment }) =>
    payment &&
    css`
      margin-top: 15px;
      height: 50px;

      img {
        margin-right: 10px;
      }
    `}
`

export const NewAddress = styled.a`
  color: #0db100;
  font-size: 12px;
  font-weight: 600;
  margin: 15px 0;
  cursor: pointer;
`

export const AdressesWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`

export const Address = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  border: solid 1px rgba(180, 180, 180, 0.5);
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  input[type='radio'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    flex: 1;

    &:before {
      content: '';
      height: 13px;
      width: 13px;
      flex-shrink: 0;
      border: 1px solid rgb(180, 180, 180);
      border-radius: 50%;
      margin-right: 15px;
      display: inline-block;
      vertical-align: middle;
    }
  }

  input[type='radio']:checked + label:before {
    box-sizing: border-box;
    border: 4px solid #414141;
  }

  h4 {
    font-size: 11px;
    font-weight: 600;
  }

  p {
    font-size: 11px;
    margin-top: 1px;
  }

  &:has(input[type='radio']:checked) {
    background-color: #f4f6f8;
    border: 1px solid rgba(180, 180, 180, 0.8);
  }

  &:hover {
    label:before {
      border: 1px solid #414141;
    }

    & {
      background-color: #f4f6f8;
      border: 1px solid black;
    }
  }

  span {
    color: #0db100;
    font-size: 11px;
    font-weight: 700;
  }

  & > :nth-child(2) {
    flex: 5;
    word-break: break-all;
  }

  & > :nth-child(3) {
    margin-left: 5px;
    flex: 1;
  }
`

export const Division = styled.div`
  height: 1px;
  border-bottom: 2px solid #e7e7e7;
  width: 100%;
  margin: 20px 0;
  opacity: 0.8;
`

export const DeliveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`

export const InlineDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${({ payment }) =>
    payment &&
    css`
      gap: 10px;

      > div:first-child {
        flex: 1;
      }

      > div:last-child {
        flex: 1;
      }
    `}
`

export const InlineAddressDiv = styled.div`
  gap: 10px;
  display: flex;

  p {
    margin: 43px 0 0 10px;
    font-size: 11px;
    white-space: nowrap;
  }

  ${({ neighborhood }) =>
    neighborhood &&
    css`
      & > div:first-child {
        flex: 1;
      }
      & > div:last-child {
        flex: 2;
      }
    `}

  ${({ isCep }) =>
    isCep &&
    css`
      & > div:first-child {
        flex: 0 0 50%;
      }
    `}
`

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Payment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: solid 1px rgba(180, 180, 180, 0.5);
  border-radius: 5px;
  padding: 15px 10px;
  cursor: pointer;

  h5 {
    font-size: 14px;
    font-weight: 600;
    margin-left: 8px;
  }

  img {
    height: 15px;
  }

  > label {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:before {
      content: '';
      height: 13px;
      width: 13px;
      flex-shrink: 0;
      border: 1px solid rgb(180, 180, 180);
      border-radius: 50%;
      margin-left: 5px;
      margin-right: 15px;
    }
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label:before {
    box-sizing: border-box;
    border: 4px solid #414141;
  }

  &:has(input[type='radio']:checked) {
    background-color: #f4f6f8;
    border: 1px solid rgba(180, 180, 180, 0.8);
  }

  &:hover {
    label:before {
      border: 1px solid #414141;
    }

    & {
      background-color: #f4f6f8;
      border: 1px solid black;
    }
  }

  span {
    color: #0db100;
    font-size: 11px;
    font-weight: 700;
  }

  ${({ wallet }) =>
    wallet &&
    css`
      span {
        color: white;
      }
    `}

  & > :nth-child(2) {
    flex: 5;
    word-break: break-all;
  }

  & > :nth-child(3) {
    margin-left: 5px;
    flex: 1;
  }
`

export const PaymentDescription = styled.p`
  font-weight: 600;
  font-size: 13px;
  margin-top: 15px;
`

export const PaymentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TotalToPay = styled.h3`
  color: #0db100;
  font-size: 16px;
  font-weight: 800;
`

export const QrCode = styled.img`
  height: 250px !important;
  width: 250px !important;
  margin: 0 auto;
`

export const SummaryTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
`

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const PriceSummaryDiv = styled.div`
  background-color: #f4f6f8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  margin-bottom: 20px;

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
`

export const ProductsSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ProductSummary = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;

  & > :nth-child(1) {
    flex: 2;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  & > :nth-child(2) {
    flex: 7;
    display: flex;
    flex-direction: column;
    gap: 5px;

    h4 {
      color: #888888;
      font-weight: 500;
      font-size: 12px;
    }

    label {
      font-weight: 600;
      font-size: 12px;
      margin-bottom: 10px;
    }
  }

  & > :nth-child(3) {
    flex: 1;
    display: flex;
    align-items: start;

    img {
      max-width: 12px;
      height: auto;
      margin-left: auto;
      cursor: pointer;

      filter: brightness(0) saturate(100%) invert(64%) sepia(37%) saturate(5%)
        hue-rotate(50deg) brightness(90%) contrast(84%);
    }
  }
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  font-weight: 500;
  margin-top: 3px;
`
