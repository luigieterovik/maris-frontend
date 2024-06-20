import React, { useState, useEffect } from 'react'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function Pix({
  qrCode,
  copyQrCode,
  loading,
  pixError,
  setOpenPixPopup
}) {
  const [copy, setCopy] = useState('Copiar código PIX')
  const copyToClipboard = () => {
    navigator.clipboard.writeText(copyQrCode)
    setCopy('Copiado!')
  }

  return (
    <S.Wrapper>
      <S.Button close onClick={() => setOpenPixPopup(false)} type="button">
        Fechar
      </S.Button>
      {loading && (
        <S.PixDiv loading>
          <S.LoadingImg src={i('spinner.gif')} />
          <S.Description>Carregando PIX...</S.Description>
        </S.PixDiv>
      )}
      {qrCode && (
        <S.PixDiv>
          <S.Description>
            Abra o aplicativo de pagamento onde você utiliza o Pix e escolha a
            opção <span>Ler QR Code</span> ou <span>Colar Código Copiado</span>.
          </S.Description>
          <S.Description camera>
            <img src={i('phone.png')} />
            Aponte a câmera do seu celular
          </S.Description>
          <S.QrCode src={`data:image/png;base64,${qrCode}`} alt="qr-code" />
          <S.Button onClick={copyToClipboard} type="button">
            {copy === 'Copiar código PIX' && <img src={i('copy.png')} />}
            {copy}
          </S.Button>
        </S.PixDiv>
      )}
      {pixError && (
        <S.PixDiv loading>
          <S.LoadingImg src={i('error.png')} />
          <S.Description>{pixError}</S.Description>
        </S.PixDiv>
      )}
    </S.Wrapper>
  )
}
