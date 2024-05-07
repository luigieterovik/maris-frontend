import React, { useState, useEffect, useRef } from 'react'

import { productImagesState, productsState } from '../../utils/states'

import { useParams } from 'react-router-dom'

import * as S from './styles'

const i = name => {
  return require('../../assets/' + name)
}

export default function Product() {
  const { products } = productsState()
  const { productImages } = productImagesState()

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

  const { id } = useParams()

  const [product, setProduct] = useState({})
  const [images, setImages] = useState([])

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id)
      const filteredProduct = products.find(product => product.id === parsedId)
      setProduct(filteredProduct)
      setImages(prevState => {
        return [
          filteredProduct.image,
          ...(productImages.find(item => item.productId === parsedId)?.images ||
            [])
        ]
      })
    }
  }, [id])

  return (
    <S.Container>
      <S.LeftWrapper>
        <S.ImageWrapper>
          <S.AllImages ref={allImagesRef}>
            {images.map((image, index) => (
              <S.MiniImage key={index} src={i(image)} />
            ))}
          </S.AllImages>

          <S.MainImage />
        </S.ImageWrapper>
      </S.LeftWrapper>

      <S.RightWrapper></S.RightWrapper>
    </S.Container>
  )
}
