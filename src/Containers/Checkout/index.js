import React, { useState, useEffect, useContext } from 'react'

import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputMask from 'react-input-mask'

import * as S from './styles'
import QuantityChanger from '../../components/QuantityChanger'
import { CartContext } from '../../contexts/Cart'
import { identificationSchema, deliverySchema } from './validation'
import {
  offerPercentageCalculate,
  priceToCurrency
} from '../../utils/functions'
import EmptyCart from '../EmptyCart'
import Pix from '../Pix'

const i = name => {
  return require('../../assets/' + name)
}

export default function Checkout() {
  const { cartProducts, removeProductToCart } = useContext(CartContext)

  const [currentStep, setCurrentStep] = useState(1)

  const [totalToPay, setTotalToPay] = useState(0)

  return cartProducts.length === 0 ? (
    <EmptyCart />
  ) : (
    <S.Container>
      <S.Wrapper>
        <S.JoinDiv>
          <Identification
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />

          <Delivery currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </S.JoinDiv>

        <Payment
          currentStep={currentStep}
          cartProducts={cartProducts}
          totalToPay={totalToPay}
        />

        <Summary
          cartProducts={cartProducts}
          removeProductToCart={removeProductToCart}
          totalToPay={totalToPay}
          setTotalToPay={setTotalToPay}
        />
      </S.Wrapper>
    </S.Container>
  )
}

function Identification({ currentStep, setCurrentStep }) {
  const [identificationErrors, setIdentificationErrors] = useState()

  const identificationForm = useForm({
    resolver: yupResolver(identificationSchema)
  })

  const [storedUserData, setStoredUserData] = useState()

  const handleIdentificationFormSubmit = identificationData => {
    localStorage.setItem(
      'marisboutiks:checkoutIdentification',
      JSON.stringify({
        fullName: identificationData.fullName,
        email: identificationData.email,
        cpf: identificationData.cpf,
        phoneNumber: identificationData.phoneNumber
      })
    )

    setStoredUserData(
      JSON.parse(localStorage.getItem('marisboutiks:checkoutIdentification'))
    )
    setCurrentStep(prev => prev + 1)
  }

  useEffect(() => {
    if (identificationForm.formState.errors)
      setIdentificationErrors(identificationForm.formState.errors)
  }, [identificationForm.formState.errors])

  const editForm = () => {
    if (currentStep > 1) setCurrentStep(1)
  }

  return (
    <S.CheckDiv
      onSubmit={identificationForm.handleSubmit(handleIdentificationFormSubmit)}
      step={1}
      currentStep={currentStep}
      completed={currentStep > 1}
      onClick={editForm}
    >
      <S.TitleDiv>
        <S.CheckNumber>1</S.CheckNumber>
        <S.Title>
          Identificação
          <S.CheckIcon src={i('checkTitle.png')} display={currentStep > 1} />
        </S.Title>
      </S.TitleDiv>

      {currentStep === 1 ? (
        <>
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
              <S.ErrorMessage>
                {identificationErrors.email.message}
              </S.ErrorMessage>
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
              <S.ErrorMessage>
                {identificationErrors.cpf.message}
              </S.ErrorMessage>
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
        </>
      ) : (
        storedUserData && (
          <S.FormValidationSummaryWrapper>
            <S.FormValidationSummaryDescription big>
              {storedUserData.fullName}
            </S.FormValidationSummaryDescription>
            <S.FormValidationSummaryDescription>
              {storedUserData.email}
            </S.FormValidationSummaryDescription>
            <S.FormValidationSummaryDescription>
              {storedUserData.cpf}
            </S.FormValidationSummaryDescription>
          </S.FormValidationSummaryWrapper>
        )
      )}
    </S.CheckDiv>
  )
}

function Delivery({ currentStep, setCurrentStep }) {
  const [renderAddress, setRenderAddress] = useState(true)

  useEffect(() => {
    if (
      Array.isArray(
        JSON.parse(localStorage.getItem('marisboutiks:checkoutDelivery'))
      )
    )
      setRenderAddress(false)
    else
      localStorage.setItem('marisboutiks:checkoutDelivery', JSON.stringify([]))
  }, [])

  const [deliveryErrors, setDeliveryErrors] = useState()

  const deliveryForm = useForm({
    resolver: yupResolver(deliverySchema)
  })

  const handleDeliveryFormSubmit = deliveryData => {
    let checkoutDelivery = []

    let storedData = JSON.parse(
      localStorage.getItem('marisboutiks:checkoutDelivery')
    )

    checkoutDelivery.push(...storedData)

    const newDeliveryData = {
      ...deliveryData,
      city: fetchedCepData.localidade,
      state: fetchedCepData.uf
    }
    checkoutDelivery.push(newDeliveryData)

    localStorage.setItem(
      'marisboutiks:checkoutDelivery',
      JSON.stringify(checkoutDelivery)
    )

    setRenderAddress(false)
  }

  useEffect(() => {
    if (deliveryForm.formState.errors)
      setDeliveryErrors(deliveryForm.formState.errors)
  }, [deliveryForm.formState.errors])

  const [storedDeliveryData, setStoredDeliveryData] = useState()

  const [fetchedCepData, setFetchedCepData] = useState({
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: ''
  })

  const editForm = () => {
    if (currentStep > 2) setCurrentStep(2)
  }

  return (
    <S.CheckDiv
      onSubmit={deliveryForm.handleSubmit(handleDeliveryFormSubmit)}
      step={2}
      currentStep={currentStep}
      completed={currentStep > 2}
      onClick={editForm}
    >
      <S.TitleDiv>
        <S.CheckNumber>2</S.CheckNumber>
        <S.Title>
          Entrega
          <S.CheckIcon src={i('checkTitle.png')} display={currentStep > 2} />
        </S.Title>
      </S.TitleDiv>
      {currentStep <= 2 && (
        <S.Description>Cadastre ou selecione um endereço</S.Description>
      )}
      {currentStep === 2 &&
        (renderAddress ? (
          <AddAddress
            renderAddress={renderAddress}
            setRenderAddress={setRenderAddress}
            deliveryForm={deliveryForm}
            deliveryErrors={deliveryErrors}
            fetchedCepData={fetchedCepData}
            setFetchedCepData={setFetchedCepData}
          />
        ) : (
          <SelectDelivery
            setRenderAddress={setRenderAddress}
            setCurrentStep={setCurrentStep}
            setStoredDeliveryData={setStoredDeliveryData}
          />
        ))}
      {currentStep > 2 && (
        <S.FormValidationSummaryWrapper>
          <S.FormValidationSummaryDescription>
            {storedDeliveryData.address}, {storedDeliveryData.houseNumber} -{' '}
            {storedDeliveryData.neighborhood}
          </S.FormValidationSummaryDescription>
          {storedDeliveryData && storedDeliveryData.complement && (
            <S.FormValidationSummaryDescription>
              {storedDeliveryData.complement}
            </S.FormValidationSummaryDescription>
          )}
          <S.FormValidationSummaryDescription>
            {storedDeliveryData.city}-{storedDeliveryData.state} |{' '}
            {storedDeliveryData.cep}
          </S.FormValidationSummaryDescription>
        </S.FormValidationSummaryWrapper>
      )}
    </S.CheckDiv>
  )
}

function AddAddress({
  deliveryForm,
  deliveryErrors,
  fetchedCepData,
  setFetchedCepData
}) {
  const getCep = async event => {
    const { value } = event.target

    const removedUnderscores = value.replace(/_/g, '')

    if (removedUnderscores.length === 9) {
      const cep = value.replace(/-/g, '')

      const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      deliveryForm.setValue('address', data.logradouro)
      deliveryForm.setValue('neighborhood', data.bairro)
      deliveryForm.setValue(
        'recipient',
        JSON.parse(localStorage.getItem('marisboutiks:checkoutIdentification'))
          .fullName
      )

      const dataWithCep = { ...data, cep }
      setFetchedCepData(dataWithCep)
    }
  }

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
              onChange={e => getCep(e)}
            />
            <img />
          </S.FieldDiv>
          {deliveryErrors && deliveryErrors.cep && (
            <S.ErrorMessage>{deliveryErrors.cep.message}</S.ErrorMessage>
          )}
        </div>
        <p>
          {fetchedCepData.localidade} {fetchedCepData.localidade !== '' && '/ '}
          {fetchedCepData.uf}
        </p>
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

function SelectDelivery({
  renderAddress,
  setRenderAddress,
  setCurrentStep,
  setStoredDeliveryData
}) {
  const [addressess, setAddressess] = useState()

  useEffect(() => {
    if (!renderAddress) {
      const storedData = JSON.parse(
        localStorage.getItem('marisboutiks:checkoutDelivery')
      )

      setAddressess(storedData)
    }
  }, [renderAddress])

  useEffect(() => {
    if (addressess && addressess.length === 0) setRenderAddress(true)
  }, [addressess])

  const deleteAddress = indexToDelete => {
    const deletedAddress = addressess.filter(
      (address, index) => index !== indexToDelete
    )

    setAddressess(deletedAddress)

    localStorage.setItem(
      'marisboutiks:checkoutDelivery',
      JSON.stringify(deletedAddress)
    )

    setAddressToCheck(0)
  }

  const [addressToCheck, setAddressToCheck] = useState(0)

  useEffect(() => {
    setStoredDeliveryData(
      JSON.parse(localStorage.getItem('marisboutiks:checkoutDelivery'))[
        addressToCheck
      ]
    )
  }, [addressToCheck])

  return (
    <>
      <S.NewAddress onClick={() => setRenderAddress(true)}>
        + Novo endereço
      </S.NewAddress>

      <S.AdressesWrapper>
        {addressess &&
          addressess.map((address, index) => (
            <S.Address key={index} className="addressDiv">
              <input
                type="radio"
                id={index}
                onChange={() => setAddressToCheck(index)}
                checked={index === addressToCheck}
                defaultChecked={index === 0}
              />
              <label htmlFor={index}>
                <div>
                  <h4>
                    {address.address}, {address.houseNumber}
                  </h4>
                  <p>
                    {address.neighborhood} | {address.cep}
                  </p>
                </div>
              </label>
              <div>
                <img
                  src={i('trash.png')}
                  onClick={() => deleteAddress(index)}
                />
              </div>
            </S.Address>
          ))}
      </S.AdressesWrapper>

      <S.Description>
        Fretes com seguro de entrega e código de rastreio, que será enviado por
        e-mail após o pedido ser despachado.
      </S.Description>

      <S.Description>
        Você poderá entrar em contato com o nosso suporte sempre que precisar.
        Atendimento rápido e humanizado Pedidos despachados em até 24 horas.
      </S.Description>

      <S.Button onClick={() => setCurrentStep(prev => prev + 1)}>
        Continuar <img src={i('leftArrow.png')} />
      </S.Button>
    </>
  )
}

function Payment({ currentStep, cartProducts, totalToPay }) {
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

    try {
      const response = await fetch('http://localhost:3001/payStripe', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      })

      const session = await response.json()

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      })

      if (result.error) {
        console.log(result.error)
      }
    } catch (error) {
      console.error('Error processing payment:', error)
    }
  }

  const [qrCode, setQrCode] = useState()
  const [copyPix, setCopyPix] = useState()

  const [pixError, setPixError] = useState()
  const [loading, setLoading] = useState(false)
  const [openPixPopup, setOpenPixPopup] = useState(false)

  const requestPixPayment = async () => {
    if (qrCode) setOpenPixPopup(true)
    else {
      const storedIdentificationData = JSON.parse(
        localStorage.getItem('marisboutiks:checkoutIdentification')
      )

      const cpf = storedIdentificationData.cpf.replace(/[.-]/g, '')

      setOpenPixPopup(true)
      setLoading(true)

      try {
        const response = await axios.post('http://localhost:3001/pix', {
          transaction_amount: totalToPay,
          title: 'Compra de produtos Maris Boutiks',
          payer: {
            email: storedIdentificationData.email,
            identification: {
              type: 'CPF',
              number: cpf
            }
          }
        })

        setQrCode(
          response.data.point_of_interaction.transaction_data.qr_code_base64
        )
        setCopyPix(response.data.point_of_interaction.transaction_data.qr_code)

        setLoading(false)
      } catch (error) {
        console.error('Error processing PIX payment:', error)
        setPixError(error)
        setLoading(false)
      }
    }
  }

  const [selectedPaymentMethod, setSelectePaymentMethod] = useState()

  return (
    <S.CheckDiv currentStep={currentStep} step={3} noValidate>
      <S.TitleDiv>
        <S.CheckNumber>3</S.CheckNumber>
        <S.Title>
          Pagamento <img />
        </S.Title>
      </S.TitleDiv>
      <S.Description>Escolha uma forma de pagamento</S.Description>
      {currentStep === 3 && (
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
                  Ao clicar no botão abaixo você será redirecionado para a tela
                  de pagamento. Preencha os dados conforme se pede e finalize o
                  pagamento.
                </S.PaymentDescription>
                <S.Button
                  payment
                  onClick={() => requestPaymentStripe('card')}
                  type="button"
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

                <S.Button payment onClick={requestPixPayment} type="button">
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
                  type="button"
                >
                  <img src={i('padlock.png')} />
                  Comprar Agora
                </S.Button>
              </S.PaymentContentWrapper>
            )}
          </S.Payment>

          <S.PixWrapper open={openPixPopup}>
            <Pix
              qrCode={qrCode}
              copyPix={copyPix}
              loading={loading}
              pixError={pixError}
              setOpenPixPopup={setOpenPixPopup}
            />
          </S.PixWrapper>
        </S.PaymentWrapper>
      )}
    </S.CheckDiv>
  )
}

function Summary({
  cartProducts,
  removeProductToCart,
  totalToPay,
  setTotalToPay
}) {
  useEffect(() => {
    setTotalToPay(
      cartProducts.reduce(
        (acc, product) =>
          acc +
          (product.offerPrice ? product.offerPrice : product.price) *
            product.quantity,
        0
      )
    )
  }, [cartProducts])

  return (
    <S.CheckDiv summary>
      <S.SummaryWrapper>
        <S.SummaryTitle>RESUMO</S.SummaryTitle>

        <S.PriceSummaryDiv>
          <div>
            <p>Produtos</p> <p>{priceToCurrency(totalToPay)}</p>
          </div>

          <div>
            <p>Frete</p> <p>Grátis</p>
          </div>

          <div style={{ marginTop: '10px' }}>
            <p style={{ color: '#0db100' }}>Total</p>
            <S.TotalToPay>{priceToCurrency(totalToPay)}</S.TotalToPay>
          </div>
        </S.PriceSummaryDiv>

        <S.ProductsSummaryWrapper>
          {cartProducts &&
            cartProducts.map((product, index) => (
              <>
                <S.ProductSummary key={index}>
                  <div>
                    <img src={i(product.image)} />
                  </div>
                  <div>
                    <h4>{product.name}</h4>
                    <label>
                      {product.offerPercentage
                        ? priceToCurrency(
                            offerPercentageCalculate(
                              product.price,
                              product.offerPercentage
                            )
                          )
                        : priceToCurrency(product.price)}
                    </label>
                    <QuantityChanger
                      isCart
                      quantity={product.quantity}
                      id={product.id}
                    />
                  </div>
                  <div>
                    <img
                      src={i('trash.png')}
                      onClick={() => removeProductToCart(index)}
                    />
                  </div>
                </S.ProductSummary>
                {cartProducts[index + 1] !== undefined && <S.Division />}
              </>
            ))}
        </S.ProductsSummaryWrapper>
      </S.SummaryWrapper>
    </S.CheckDiv>
  )
}
