import React from 'react'

import * as S from './styles'

export default function Checkout() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.JoinDiv>
          {/* Identificação */}
          <S.CheckDiv>
            <S.TitleDiv>
              <S.CheckNumber>1</S.CheckNumber>
              <S.Title>Identificação <img /></S.Title>
            </S.TitleDiv>
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
            <S.TitleDiv>
              <S.CheckNumber>2</S.CheckNumber>
              <S.Title>Entrega <img /></S.Title>
            </S.TitleDiv>
            <S.Description>Cadastre ou selecione um endereço</S.Description>
            <AddAddress />
          </S.CheckDiv>
        </S.JoinDiv>

        {/* Pagamento */}
        <S.CheckDiv>
          <S.TitleDiv>
            <S.CheckNumber>3</S.CheckNumber>
            <S.Title>Pagamento <img /></S.Title>
          </S.TitleDiv>
          <S.Description>Escolha uma forma de pagamento</S.Description>
        </S.CheckDiv>
      </S.Wrapper>
    </S.Container>
  )
}

function AddAddress() {
  return (
    <>
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

      <S.Button>Salvar</S.Button>
    </>
  )
}

function Delivery() {
  return (
    <>
      <a>+ Novo endereço</a>

      <S.AdressesWrapper>
        <div>
          <input type="radio" />
          <h4>Rua, número - bairro</h4>
          <p>São Paulo - SP | CEP</p>
        </div>
      </S.AdressesWrapper>

      <S.Division />

      <p>Escolha uma forma de entrega:</p>

      <S.DeliveryWrapper>
        <div>
          <input type="radio" />
          <div>
            <h4>PAC Correios - 5 a 12 dias úteis</h4>
            <p>Entrega garantida</p>
          </div>
          <label>Grátis</label>
        </div>

        <div>
          <input type="radio" />
          <div>
            <h4>Frete Express - 3 a 9 dias úteis</h4>
            <p>Entrega garantida</p>
          </div>
          <label>R$ 14,49</label>
        </div>
      </S.DeliveryWrapper>

      <p>
        Fretes com seguro de entrega e código de rastreio, que será enviado por
        e-mail após o pedido ser despachado. Você poderá entrar em contato com o
        nosso suporte sempre que precisar. Atendimento rápido e humanizado
        Pedidos despachados em até 24 horas.
      </p>

      <S.Button>Continuar</S.Button>
    </>
  )
}
