import styled from 'styled-components'

export const FooterBar = styled.div`
  width: 100%;
  height: 6px;

  background-image: linear-gradient(90deg, #7000ba, #f300ed, #7000ba);
`

export const PaymentIcon = styled.img`
  height: 30px;
  width: 50px;
  border-radius: 5px;
  margin: 5px 10px 0 0;
`

export const Footer = styled.footer`
  height: 250px;
  background-color: black;
  padding: 60px 60px;

  .payment {
    font-size: 14px;
  }

  .comunication:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export const FooterItem = styled.p`
  color: white;
  width: fit-content;

  .emailIcon {
    height: 20px;
    width: auto;
    margin: 0;
    transform: translateY(6px);
  }

  .phoneIcon {
    height: 24px;
    width: auto;
    margin: 0;
    transform: translateY(5px);
  }
`
