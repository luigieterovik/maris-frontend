import React, { useState } from 'react'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function Checkout() {
  const [renderAddress, setRenderAddress] = useState()

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
            {renderAddress ? (
              <AddAddress setRenderAddress={setRenderAddress} />
            ) : (
              <Delivery setRenderAddress={setRenderAddress} />
            )}
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
          <S.PaymentWrapper>
            <S.Payment>
              <input type="radio" id="card" />
              <label htmlFor="card">
                <img src={i('card.png')} />
                <h5>Cartão de crédito</h5>
              </label>

              <S.PaymentContentWrapper></S.PaymentContentWrapper>
            </S.Payment>

            <S.Payment>
              <input type="radio" id="pix" />
              <label htmlFor="pix">
                <img src={i('pix.png')} />
                <h5>Pix</h5>
              </label>

              <S.PaymentContentWrapper>
                <S.PaymentDescription>
                  A confirmação de pagamento é realizada em poucos minutos.
                  Utilize o aplicativo do seu banco para pagar.
                </S.PaymentDescription>
                <S.TotalToPay>Valor no Pix: R$ 142,41</S.TotalToPay>
                <S.Button payment>Comprar Agora</S.Button>
              </S.PaymentContentWrapper>
            </S.Payment>

            <S.Payment>
              <input type="radio" id="bank-slip" />
              <label htmlFor="bank-slip">
                <img src={i('slip.png')} />
                <h5>Boleto</h5>
              </label>

              <S.PaymentContentWrapper></S.PaymentContentWrapper>
            </S.Payment>
          </S.PaymentWrapper>
        </S.CheckDiv>
      </S.Wrapper>
    </S.Container>
  )
}

function AddAddress({ setRenderAddress }) {
  return (
    <>
      <S.InlineAddressDiv isCep>
        <div>
          <S.FieldLabel>CEP</S.FieldLabel>
          <S.FieldDiv isCep>
            <S.Input />
            <img />
          </S.FieldDiv>
        </div>
        <p>São Paulo / SP</p>
      </S.InlineAddressDiv>

      <S.FieldLabel>Endereço</S.FieldLabel>
      <S.FieldDiv>
        <S.Input />
        <img />
      </S.FieldDiv>

      <S.InlineAddressDiv neighborhood>
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
      </S.InlineAddressDiv>

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

      <S.Button onClick={() => setRenderAddress(false)}>Salvar</S.Button>
    </>
  )
}

function Delivery({ setRenderAddress }) {
  const [addressess, setAddressess] = useState([
    {
      cep: '02260-001',
      address: 'Avenida Luís Stamatis',
      number: '103',
      neighborhood: 'Vila Constança',
      complement: '',
      recipient: 'Carlos'
    }
  ])

  return (
    <>
      <S.NewAddress onClick={() => setRenderAddress(true)}>
        + Novo endereço
      </S.NewAddress>

      <S.AdressesWrapper>
        {addressess.map((address, index) => (
          <S.Address key={index} className="addressDiv">
            <input type="radio" id={index} />
            <label htmlFor={index}>
              <div>
                <h4>
                  {address.address}, {address.number}
                </h4>
                <p>São Paulo - SP | {address.cep}</p>
              </div>
            </label>
          </S.Address>
        ))}
      </S.AdressesWrapper>

      <S.Division />

      <S.Description>Escolha uma forma de entrega:</S.Description>

      <S.DeliveryWrapper>
        <S.Address>
          <input type="radio" id={'mail-1'} />
          <label htmlFor={'mail-1'}>
            <div>
              <h4>PAC Correios - 5 a 12 dias úteis</h4>
              <p>Entrega garantida</p>
            </div>
          </label>
          <span>Grátis</span>
        </S.Address>

        <S.Address>
          <input type="radio" id={'mail-2'} />
          <label htmlFor={'mail-2'}>
            <div>
              <h4>Frete Express - 3 a 9 dias úteis</h4>
              <p>Entrega garantida</p>
            </div>
          </label>
          <span>R$ 14,49</span>
        </S.Address>
      </S.DeliveryWrapper>

      <S.Description>
        Fretes com seguro de entrega e código de rastreio, que será enviado por
        e-mail após o pedido ser despachado.
      </S.Description>

      <S.Description>
        Você poderá entrar em contato com o nosso suporte sempre que precisar.
        Atendimento rápido e humanizado Pedidos despachados em até 24 horas.
      </S.Description>

      <S.Button>Continuar</S.Button>
    </>
  )
}
