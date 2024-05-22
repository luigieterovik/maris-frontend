import React from 'react'

import * as S from './styles'

export default function Checkout() {
  return (
    <S.Container>
      <S.Wrapper>
        {/* Identificação */}
        <S.CheckDiv>
          <S.CheckNumber>1</S.CheckNumber>
          <S.Title>Identificação</S.Title>
          <S.Description>
            Utilizaremos seu e-mail para: Identificar seu perfil, histórico de
            compra, notificação de pedidos e carrinho de compras.
          </S.Description>

          <S.FieldLabel>Nome completo</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>

          <S.FieldLabel>E-mail</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>

          <S.FieldLabel>CPF</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>

          <S.FieldLabel isPhoneNumber>Celular / WhatsApp</S.FieldLabel>
          <S.FieldDiv>
            <div>+55</div>
            <S.Input />
            <img />
          </S.FieldDiv>

          <S.Button>
            Continuar <img />
          </S.Button>
        </S.CheckDiv>

        {/* Entrega */}
        <S.CheckDiv>
          <S.CheckNumber>2</S.CheckNumber>
          <S.Title>Entrega</S.Title>
          <S.Description>Cadastre ou selecione um endereço</S.Description>

          <S.FieldLabel>CEP</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>

          <S.FieldLabel>Endereço</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>

          <S.FieldLabel>Número</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>

          <S.FieldLabel>Bairro</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>

          <S.FieldLabel>Complemento</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>

          <S.FieldLabel>Destinatário</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>
        </S.CheckDiv>

        {/* Pagamento */}
        <S.CheckDiv></S.CheckDiv>
      </S.Wrapper>
    </S.Container>
  )
}
