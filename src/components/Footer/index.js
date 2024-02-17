import React from 'react'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function Footer() {
  return (
    <>
      <S.FooterBar></S.FooterBar>

      <S.Footer>
        <S.FooterItem style={{ float: 'right', width: '70%' }}>
          Preços e condições de pagamento exclusivos para compras neste site
          oficial, podendo variar com o tempo da oferta. Evite comprar produtos
          mais baratos ou de outras lojas, pois você pode estar sendo
          enganado(a) por um golpista. Caso você compre os mesmos produtos em
          outras lojas,{' '}
          <b>não nos responsabilizamos por quaisquer problemas.</b>
        </S.FooterItem>
        <S.FooterItem style={{ fontWeight: 700, fontSize: '14px' }}>
          ATENDIMENTO AO CLIENTE
        </S.FooterItem>{' '}
        <br />
        <S.FooterItem style={{ fontSize: '14px' }} className="comunication">
          {' '}
          <S.PaymentIcon
            src={i('mail.png')}
            alt="mail-icon"
            className="emailIcon"
          />{' '}
          ENTRAR EM CONTATO (E-MAIL)
        </S.FooterItem>{' '}
        <br />
        <S.FooterItem style={{ fontSize: '14px' }} className="comunication">
          {' '}
          <S.PaymentIcon
            src={i('phone.png')}
            alt="mail-icon"
            className="phoneIcon"
          />{' '}
          +55 (11) 99556-4108 (WHATSAPP)
        </S.FooterItem>{' '}
        <br />
        <S.FooterItem className="payment">Nós aceitamos:</S.FooterItem>
        <S.PaymentIcon src={i('pix.jpg')} alt="pix-icon" />
        <S.PaymentIcon src={i('boleto.png')} alt="boleto-icon" />
      </S.Footer>
    </>
  )
}
