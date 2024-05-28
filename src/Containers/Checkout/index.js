import React from 'react'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function Checkout() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.JoinDiv>
          {/* Identificação */}
          <S.CheckDiv>
            <S.TitleDiv>
              <S.CheckNumber>1</S.CheckNumber>
              <S.Title>
                Identificação <img />
              </S.Title>
            </S.TitleDiv>
            <S.Description>
              Utilizaremos seu e-mail para: Identificar seu perfil, histórico de
              compra, notificação de pedidos e carrinho de compras.
            </S.Description>

            <S.FieldLabel>Nome completo</S.FieldLabel>
            <S.FieldDiv>
              <S.Input placeholder="ex.: Maria de Almeida Cruz" />
              <img />
            </S.FieldDiv>

            <S.FieldLabel>E-mail</S.FieldLabel>
            <S.FieldDiv>
              <S.Input placeholder="ex.: maria@gmail.com" />
              <img />
            </S.FieldDiv>

            <S.FieldLabel>CPF</S.FieldLabel>
            <S.FieldDiv>
              <S.Input placeholder="000.000.000-00" />
              <img />
            </S.FieldDiv>

            <S.FieldLabel>Celular / WhatsApp</S.FieldLabel>
            <S.FieldDiv isPhoneNumber>
              <div>+55</div>
              <S.Input placeholder="(00) 00000-0000" />
              <img />
            </S.FieldDiv>

            <S.Button>
              Continuar <img src={i('leftArrow.png')} />
            </S.Button>
          </S.CheckDiv>

          {/* Entrega */}
          <S.CheckDiv>
            <S.TitleDiv>
              <S.CheckNumber>2</S.CheckNumber>
              <S.Title>
                Entrega <img />
              </S.Title>
            </S.TitleDiv>
            <S.Description>Cadastre ou selecione um endereço</S.Description>
            <Delivery />
          </S.CheckDiv>
        </S.JoinDiv>

        {/* Pagamento */}
        <S.CheckDiv>
          <S.TitleDiv>
            <S.CheckNumber>3</S.CheckNumber>
            <S.Title>
              Pagamento <img />
            </S.Title>
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
      <S.InlineDiv isCep>
        <div>
          <S.FieldLabel>CEP</S.FieldLabel>
          <S.FieldDiv isCep>
            <S.Input />
            <img />
          </S.FieldDiv>
        </div>
        <p>São Paulo / SP</p>
      </S.InlineDiv>

      <S.FieldLabel>Endereço</S.FieldLabel>
      <S.FieldDiv>
        <S.Input />
        <img />
      </S.FieldDiv>

      <S.InlineDiv neighborhood>
        <div>
          <S.FieldLabel>Número</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>
        </div>

        <div>
          <S.FieldLabel>Bairro</S.FieldLabel>
          <S.FieldDiv>
            <S.Input />
            <img />
          </S.FieldDiv>
        </div>
      </S.InlineDiv>

      <S.FieldLabel>Complemento (opcional)</S.FieldLabel>
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
      <S.NewAddress>+ Novo endereço</S.NewAddress>

      <S.AdressesWrapper>
        <S.Address>
          <input type="radio" />
          <div>
            <h4>Rua Silveira Pires, 635 - Parque Paulistano</h4>
            <p>São Paulo - SP | CEP</p>
          </div>
        </S.Address>
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
