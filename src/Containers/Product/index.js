import React, { useState, useEffect, useRef } from 'react'

import { productImagesState, productsState } from '../../utils/states'

import { useParams } from 'react-router-dom'

import * as S from './styles'
import {
  offerPercentageCalculate,
  priceToCurrency
} from '../../utils/functions'

const i = name => {
  return require('../../assets/' + name)
}

export default function Product() {
  const { products } = productsState()
  const { productImages } = productImagesState()

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
    setImages(prevState => {
      return [
        filteredProduct.image,
        ...(productImages.find(item => item.productId === parsedId)?.images ||
          [])
      ]
    })
  }, [id])

  const [offerPrice, setOfferPrice] = useState()

  useEffect(() => {
    if (product && product.offerPercentage) {
      setOfferPrice(
        offerPercentageCalculate(product.price, product.offerPercentage)
      )
    }
  }, [product])

  // quantity
  const [quantity, setQuantity] = useState(1)

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
                      {priceToCurrency(product.price - offerPrice)} de desconto
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

            <S.BuyButton>Comprar agora</S.BuyButton>
          </S.RightWrapper>
        </S.Container>
      )}
    </>
  )
}
