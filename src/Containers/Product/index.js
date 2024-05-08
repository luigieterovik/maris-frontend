import React, { useState, useEffect, useRef, useContext } from 'react'

import { productImagesState, productsState } from '../../utils/states'

import { useParams, useNavigate } from 'react-router-dom'

import * as S from './styles'

import {
  offerPercentageCalculate,
  priceToCurrency
} from '../../utils/functions'

import { CartContext } from '../../contexts/Cart'

const i = name => {
  return require('../../assets/' + name)
}

export default function Product() {
  const { products } = productsState()
  const { productImages } = productImagesState()

  const navigate = useNavigate()

  // Scroll on images
  const allImagesRef = useRef(null)

  useEffect(() => {
    const preventScroll = e => {
      if (allImagesRef.current.contains(e.target)) {
        e.preventDefault()
        allImagesRef.current.scrollTop += e.deltaY
      }
    }
    document.addEventListener('wheel', preventScroll, { passive: false })
    return () => {
      document.removeEventListener('wheel', preventScroll)
    }
  }, [])

  // Get params and set states
  const { id } = useParams()

  const [product, setProduct] = useState()
  const [images, setImages] = useState()
  const [displayImage, setDisplayImage] = useState()

  useEffect(() => {
    const parsedId = parseInt(id)
    const filteredProduct = products.find(product => product.id === parsedId)
    setProduct(filteredProduct)
    setDisplayImage(filteredProduct.image)
    setImages(() => {
      return [
        filteredProduct.image,
        ...(productImages.find(item => item.productId === parsedId)?.images ||
          [])
      ]
    })
  }, [id])

  const [offerPrice, setOfferPrice] = useState()
  const [offerEconomy, setOfferEconomy] = useState()

  useEffect(() => {
    if (product && product.offerPercentage) {
      const calculatedOfferPrice = offerPercentageCalculate(
        product.price,
        product.offerPercentage
      )
      setOfferPrice(calculatedOfferPrice)
      setOfferEconomy(product.price - calculatedOfferPrice)
    }
  }, [product])

  // quantity
  const [quantity, setQuantity] = useState(1)

  const { cartProducts, addProductToCart } = useContext(CartContext)

  const navigateToCart = () => {
    addProductToCart({
      ...product,
      quantity,
      offerPrice,
      offerEconomy
    })
    navigate('/cart')
  }

  return (
    <>
      {product && images && (
        <S.Container>
          <S.LeftWrapper>
            <S.ImageWrapper>
              <S.AllMiniImages ref={allImagesRef}>
                {images.map((image, index) => (
                  <S.MiniImage
                    key={index}
                    src={i(image)}
                    alt="mini-image"
                    onClick={() => setDisplayImage(image)}
                  />
                ))}
              </S.AllMiniImages>

              <S.MainImage src={i(displayImage)} alt="product" />
            </S.ImageWrapper>

            <S.Division />

            <S.DescriptionWrapper>
              <h4 style={{ textAlign: 'center' }}>
                <b>Descrição</b>
              </h4>

              <S.ProductDescription>{product.description}</S.ProductDescription>
            </S.DescriptionWrapper>
          </S.LeftWrapper>

          <S.RightWrapper>
            <S.ProductTitle>
              {product.name} <img src={i('check.png')} />
            </S.ProductTitle>

            <S.PriceWrapper>
              <p>Preço: </p>
              <S.PriceDescriptionWrapper>
                {offerPrice ? (
                  <>
                    <S.OldPrice>
                      De <span>{priceToCurrency(product.price)}</span>
                    </S.OldPrice>
                    <S.Price>
                      {priceToCurrency(offerPrice)}{' '}
                      <div>
                        <img src={i('leftArrow.png')} />{' '}
                        {product.offerPercentage}%
                      </div>
                    </S.Price>
                    <label>
                      Em até 12x de <b>{priceToCurrency(offerPrice / 12)}</b>
                    </label>
                    <S.DiscountTag>
                      {priceToCurrency(offerEconomy)} de desconto
                    </S.DiscountTag>
                  </>
                ) : (
                  <>
                    <S.Price>{priceToCurrency(product.price)}</S.Price>
                    <label>
                      Em até 12x de <b>{priceToCurrency(product.price / 12)}</b>
                    </label>
                  </>
                )}
              </S.PriceDescriptionWrapper>
            </S.PriceWrapper>

            <S.QuantityWrapper>
              <S.ChangeQuantity
                quantity={quantity}
                onClick={() => setQuantity(prevState => prevState - 1)}
              >
                -
              </S.ChangeQuantity>
              <label>{quantity}</label>
              <S.ChangeQuantity
                onClick={() => setQuantity(prevState => prevState + 1)}
              >
                +
              </S.ChangeQuantity>
            </S.QuantityWrapper>

            <S.BuyButton onClick={() => navigateToCart()}>
              Comprar agora
            </S.BuyButton>
          </S.RightWrapper>
        </S.Container>
      )}
    </>
  )
}
