import React, { useState, useEffect, useContext, useRef } from 'react'

import axios from 'axios'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { loadStripe } from '@stripe/stripe-js'

import { CartContext } from '../../contexts/Cart'

import * as S from './styles'

import QuantityChanger from '../../components/QuantityChanger'

const i = name => {
  return require('../../assets/' + name)
}

export default function Checkout() {
  const [renderAddress, setRenderAddress] = useState()
  const [preferenceId, setPreferenceId] = useState()

  initMercadoPago('TEST-ded7b054-d29e-4d18-8fe8-c7c838e11686', {
    locale: 'pt-BR'
  })

  const createPreference = async () => {
    try {
      const response = await axios.post('http://localhost:3001/pay', {
        title: 'test',
        quantity: 1,
        unit_price: 100
      })

      const { id } = response.data
      return id
    } catch (err) {
      console.log(err)
    }
  }

  const handleBuy = async () => {
    const id = await createPreference()
    console.log(id)
    if (id) setPreferenceId(id)
  }

  useEffect(() => {
    handleBuy()
  }, [])

  const { cartProducts } = useContext(CartContext)

  const requestPaymentStripe = async method => {
    const stripe = await loadStripe(
      'pk_live_51PP7vCRriQcsQV6wJQIO1AYT0epOgFBX1b6cLX6OINXrUaqleLkJeHwHZ5dvj4LlvXwgrZDyoQBsPcjHlLVeNi4B00oylhn9VP'
    )

    const body = {
      products: cartProducts,
      method
    }

    const headers = {
      'Content-Type': 'application/json'
    }

    const response = await fetch('http://localhost:3001/payStripe', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    const session = await response.json()

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    })

    if (result.error) {
      console.log(result.error)
    }
  }

  const [qrCode, setQrCode] = useState()

  const requestPixPayment = async () => {
    try {
      const response = await axios.post('http://localhost:3001/pix', {
        transaction_amount: 100,
        title: 'test',
        quantity: 1,
        payer: {
          email: 'eterowiczluigi@gmail.com',
          identification: {
            type: 'CPF',
            number: '49512657880'
          }
        }
      })

      console.log(response.data.point_of_interaction.transaction_data.qr_code)
      console.log(
        response.data.point_of_interaction.transaction_data.qr_code_base64
      )

      setQrCode(
        response.data.point_of_interaction.transaction_data.qr_code_base64
      )
    } catch (error) {
      console.error('Error processing PIX payment:', error)
    }
  }

  const [selectedPaymentMethod, setSelectePaymentMethod] = useState()

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
            <S.Payment wallet onClick={() => setSelectePaymentMethod('card')}>
              <input
                type="radio"
                id="card"
                checked={selectedPaymentMethod === 'card'}
                onChange={() => setSelectePaymentMethod('card')}
              />
              <label htmlFor="card">
                <img src={i('card.png')} />
                <h5>Cartão de crédito</h5>
              </label>

              {selectedPaymentMethod === 'card' && (
                <S.PaymentContentWrapper>
                  <S.PaymentDescription>
                    Ao clicar no botão abaixo você será redirecionado para a
                    tela de pagamento. Preencha os dados conforme se pede e
                    finalize o pagamento.
                  </S.PaymentDescription>
                  <S.Button
                    payment
                    onClick={() => requestPaymentStripe('card')}
                  >
                    <img src={i('padlock.png')} />
                    Comprar Agora
                  </S.Button>
                </S.PaymentContentWrapper>
              )}
            </S.Payment>

            <S.Payment onClick={() => setSelectePaymentMethod('pix')}>
              <input
                type="radio"
                id="pix"
                checked={selectedPaymentMethod === 'pix'}
                onChange={() => setSelectePaymentMethod('pix')}
              />
              <label htmlFor="pix">
                <img src={i('pix.png')} />
                <h5>Pix</h5>
              </label>

              {selectedPaymentMethod === 'pix' && (
                <S.PaymentContentWrapper>
                  <S.PaymentDescription>
                    A confirmação de pagamento é realizada em poucos minutos.
                    Utilize o aplicativo do seu banco para pagar.
                  </S.PaymentDescription>

                  {qrCode && (
                    <S.QrCode src={`data:image/png;base64,${qrCode}`} />
                  )}

                  <S.Button payment onClick={requestPixPayment}>
                    <img src={i('padlock.png')} />
                    Comprar Agora
                  </S.Button>
                </S.PaymentContentWrapper>
              )}
            </S.Payment>

            <S.Payment onClick={() => setSelectePaymentMethod('boleto')}>
              <input
                type="radio"
                id="bank-slip"
                checked={selectedPaymentMethod === 'boleto'}
                onChange={() => setSelectePaymentMethod('boleto')}
              />
              <label htmlFor="bank-slip">
                <img src={i('slip.png')} />
                <h5>Boleto</h5>
              </label>

              {selectedPaymentMethod === 'boleto' && (
                <S.PaymentContentWrapper>
                  <S.PaymentDescription>
                    Boleto Bancário não pode ser parcelado, caso queira parcelar
                    em até 12x sua compra, finalize a compra com cartão de
                    crédito.
                  </S.PaymentDescription>
                  <S.PaymentDescription>
                    Somente quando recebermos a confirmação em até 24h, após o
                    pagamento, seguiremos com o envio das suas compras.
                  </S.PaymentDescription>
                  <S.Button
                    payment
                    onClick={() => requestPaymentStripe('boleto')}
                  >
                    <img src={i('padlock.png')} />
                    Comprar Agora
                  </S.Button>
                </S.PaymentContentWrapper>
              )}
            </S.Payment>
          </S.PaymentWrapper>
        </S.CheckDiv>

        <Summary />
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

function Summary() {
  return (
    <S.CheckDiv>
      <S.SummaryWrapper>
        <S.SummaryTitle>RESUMO</S.SummaryTitle>

        <S.PriceSummaryDiv>
          <div>
            <p>Produtos</p> <p>R$ 209,80</p>
          </div>

          <div>
            <p>Frete</p> <p>Grátis</p>
          </div>

          <div style={{ marginTop: '10px' }}>
            <p style={{ color: '#0db100' }}>Total</p>
            <S.TotalToPay>R$ 209,80</S.TotalToPay>
          </div>
        </S.PriceSummaryDiv>

        <S.ProductsSummaryWrapper>
          <S.ProductSummary>
            <div>
              <img src={i('perfume.jpg')} />
            </div>
            <div>
              <h4>Teste</h4>
              <label>R$ 59,90</label>
              <QuantityChanger isCart />
            </div>
            <div>
              <img src={i('trash.png')} />
            </div>
          </S.ProductSummary>

          <S.Division />

          <S.ProductSummary>
            <div>
              <img src={i('perfume.jpg')} />
            </div>
            <div>
              <h4>Teste</h4>
              <label>R$ 59,90</label>
              <QuantityChanger isCart />
            </div>
            <div>
              <img src={i('trash.png')} />
            </div>
          </S.ProductSummary>
        </S.ProductsSummaryWrapper>
      </S.SummaryWrapper>
    </S.CheckDiv>
  )
}
