import React, { useState, useEffect, useContext, useRef } from 'react'

import axios from 'axios'
import { initMercadoPago } from '@mercadopago/sdk-react'
import { loadStripe } from '@stripe/stripe-js'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputMask from 'react-input-mask'

import * as S from './styles'
import QuantityChanger from '../../components/QuantityChanger'
import { CartContext } from '../../contexts/Cart'
import { identificationSchema, deliverySchema } from './validation'

const i = name => {
  return require('../../assets/' + name)
}

export default function Checkout() {
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
  const [copyPix, setCopyPix] = useState()

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

      setQrCode(
        response.data.point_of_interaction.transaction_data.qr_code_base64
      )
      setCopyPix(response.data.point_of_interaction.transaction_data.qr_code)
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
          <Identification />

          {/* Entrega */}
          <Delivery />
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

function Identification() {
  const [identificationErrors, setIdentificationErrors] = useState()

  const identificationForm = useForm({
    resolver: yupResolver(identificationSchema)
  })

  const handleIdentificationFormSubmit = identificationData => {
    console.log(identificationData)

    localStorage.setItem(
      'marisboutiks:checkoutIdentification',
      JSON.stringify({
        fullName: identificationData.fullName,
        email: identificationData.email,
        cpf: identificationData.cpf,
        phoneNumber: identificationData.phoneNumber
      })
    )
  }

  useEffect(() => {
    if (identificationForm.formState.errors)
      setIdentificationErrors(identificationForm.formState.errors)
  }, [identificationForm.formState.errors])

  return (
    <S.CheckDiv
      onSubmit={identificationForm.handleSubmit(handleIdentificationFormSubmit)}
    >
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

      <div>
        <S.FieldLabel>Nome completo</S.FieldLabel>
        <S.FieldDiv>
          <S.Input
            placeholder="ex.: Maria de Almeida Cruz"
            {...identificationForm.register('fullName')}
          />
          <img />
        </S.FieldDiv>
        {identificationErrors && identificationErrors.fullName && (
          <S.ErrorMessage>
            {identificationErrors.fullName.message}
          </S.ErrorMessage>
        )}
      </div>

      <div>
        <S.FieldLabel>E-mail</S.FieldLabel>
        <S.FieldDiv>
          <S.Input
            placeholder="ex.: maria@gmail.com"
            {...identificationForm.register('email')}
          />
          <img />
        </S.FieldDiv>
        {identificationErrors && identificationErrors.email && (
          <S.ErrorMessage>{identificationErrors.email.message}</S.ErrorMessage>
        )}
      </div>

      <div>
        <S.FieldLabel>CPF</S.FieldLabel>
        <S.FieldDiv mask>
          <InputMask
            placeholder="000.000.000-00"
            mask="999.999.999-99"
            {...identificationForm.register('cpf')}
          />
          <img />
        </S.FieldDiv>
        {identificationErrors && identificationErrors.cpf && (
          <S.ErrorMessage>{identificationErrors.cpf.message}</S.ErrorMessage>
        )}
      </div>

      <div>
        <S.FieldLabel>Celular / WhatsApp</S.FieldLabel>
        <S.FieldDiv isPhoneNumber mask>
          <div>+55</div>
          <InputMask
            placeholder="(00) 00000-0000"
            mask="(99) 99999-9999"
            {...identificationForm.register('phoneNumber')}
          />
          <img />
        </S.FieldDiv>
        {identificationErrors && identificationErrors.phoneNumber && (
          <S.ErrorMessage>
            {identificationErrors.phoneNumber.message}
          </S.ErrorMessage>
        )}
      </div>

      <S.Button type="submit">
        Continuar <img src={i('leftArrow.png')} />
      </S.Button>
    </S.CheckDiv>
  )
}

function Delivery() {
  const [renderAddress, setRenderAddress] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('marisboutiks:checkoutDelivery'))
      setRenderAddress(false)
  }, [])

  const [deliveryErrors, setDeliveryErrors] = useState()

  const deliveryForm = useForm({
    resolver: yupResolver(deliverySchema)
  })

  const handleDeliveryFormSubmit = deliveryData => {
    setRenderAddress(false)

    localStorage.setItem(
      'marisboutiks:checkoutDelivery',
      JSON.stringify({
        cep: deliveryData.cep,
        address: deliveryData.address,
        houseNumber: deliveryData.houseNumber,
        neighborhood: deliveryData.neighborhood,
        complement: deliveryData.complement,
        recipient: deliveryData.recipient
      })
    )
  }

  useEffect(() => {
    if (deliveryForm.formState.errors)
      setDeliveryErrors(deliveryForm.formState.errors)
  }, [deliveryForm.formState.errors])

  return (
    <S.CheckDiv onSubmit={deliveryForm.handleSubmit(handleDeliveryFormSubmit)}>
      <S.TitleDiv>
        <S.CheckNumber>2</S.CheckNumber>
        <S.Title>
          Entrega <img />
        </S.Title>
      </S.TitleDiv>
      <S.Description>Cadastre ou selecione um endereço</S.Description>
      {renderAddress ? (
        <AddAddress
          setRenderAddress={setRenderAddress}
          deliveryForm={deliveryForm}
          deliveryErrors={deliveryErrors}
        />
      ) : (
        <SelectDelivery setRenderAddress={setRenderAddress} />
      )}
    </S.CheckDiv>
  )
}

function AddAddress({ deliveryForm, deliveryErrors }) {
  return (
    <>
      <S.InlineAddressDiv isCep>
        <div>
          <S.FieldLabel>CEP</S.FieldLabel>
          <S.FieldDiv mask>
            <InputMask
              placeholder="00000-000"
              mask="99999-999"
              {...deliveryForm.register('cep')}
            />
            <img />
          </S.FieldDiv>
          {deliveryErrors && deliveryErrors.cep && (
            <S.ErrorMessage>{deliveryErrors.cep.message}</S.ErrorMessage>
          )}
        </div>
        <p>São Paulo / SP</p>
      </S.InlineAddressDiv>

      <S.FieldLabel>Endereço</S.FieldLabel>
      <S.FieldDiv>
        <S.Input {...deliveryForm.register('address')} />
        <img />
      </S.FieldDiv>
      {deliveryErrors && deliveryErrors.address && (
        <S.ErrorMessage>{deliveryErrors.address.message}</S.ErrorMessage>
      )}

      <S.InlineAddressDiv neighborhood>
        <div>
          <S.FieldLabel>Número</S.FieldLabel>
          <S.FieldDiv>
            <S.Input {...deliveryForm.register('houseNumber')} />
            <img />
          </S.FieldDiv>
          {deliveryErrors && deliveryErrors.houseNumber && (
            <S.ErrorMessage>
              {deliveryErrors.houseNumber.message}
            </S.ErrorMessage>
          )}
        </div>

        <div>
          <S.FieldLabel>Bairro</S.FieldLabel>
          <S.FieldDiv>
            <S.Input {...deliveryForm.register('neighborhood')} />
            <img />
          </S.FieldDiv>
          {deliveryErrors && deliveryErrors.neighborhood && (
            <S.ErrorMessage>
              {deliveryErrors.neighborhood.message}
            </S.ErrorMessage>
          )}
        </div>
      </S.InlineAddressDiv>

      <S.FieldLabel>Complemento (opcional)</S.FieldLabel>
      <S.FieldDiv>
        <S.Input {...deliveryForm.register('complement')} />
        <img />
      </S.FieldDiv>
      {deliveryErrors && deliveryErrors.complement && (
        <S.ErrorMessage>{deliveryErrors.complement.message}</S.ErrorMessage>
      )}

      <S.FieldLabel>Destinatário</S.FieldLabel>
      <S.FieldDiv>
        <S.Input {...deliveryForm.register('recipient')} />
        <img />
      </S.FieldDiv>
      {deliveryErrors && deliveryErrors.recipient && (
        <S.ErrorMessage>{deliveryErrors.recipient.message}</S.ErrorMessage>
      )}

      <S.Button type="submit">Salvar</S.Button>
    </>
  )
}

function SelectDelivery({ setRenderAddress }) {
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
