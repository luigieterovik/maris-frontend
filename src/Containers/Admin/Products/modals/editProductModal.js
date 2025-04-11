import React, { useState, useEffect } from 'react'
import * as S from '../styles.js'

const EditProductModal = ({
  isOpen,
  onClose,
  product,
  onSubmit,
  categories
}) => {
  const [id, setId] = useState()
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [category, setCategory] = useState()
  const [description, setDescription] = useState()
  const [offer, setOffer] = useState()
  const [image, setImage] = useState()
  const [finalPrice, setFinalPrice] = useState()

  useEffect(() => {
    if (product) {
      setId(product.id)
      setName(product.name)
      setPrice(product.price)
      setCategory(product.categoryId)
      setDescription(product.description)
      setOffer(product.offerPercentage)
      setImage(product.image)
    }
  }, [product])

  useEffect(() => {
    if (offer > 0 && price > 0) {
      const discount = (price * offer) / 100
      setFinalPrice(price - discount)
    } else {
      setFinalPrice(price)
    }
  }, [offer, price])

  const handleImageChange = e => {
    setImage(e.target.files[0])
  }

  const handleSubmit = () => {
    const updatedProduct = {
      id,
      name,
      price: parseFloat(price),
      categoryId: category,
      description,
      offerPercentage: parseFloat(offer),
      image
    }
    onSubmit(updatedProduct)
    onClose()
  }

  if (!isOpen) {
    return null
  }

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Faixa>
          <h2>Editar Produto</h2>
        </S.Faixa>
        <S.Form>
          <S.Label>
            Imagem:
            <S.Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </S.Label>
          <S.Label>
            Nome:
            <S.Input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </S.Label>
          <S.Label>
            Preço:
            <S.DivInput>
              <div>R$</div>
              <S.Input
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </S.DivInput>
          </S.Label>
          <S.Label>
            Categoria:
            <S.Select
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {categories.map(categoryMapped => {
                return (
                  <option key={categoryMapped.id} value={categoryMapped.id}>
                    {categoryMapped.name}
                  </option>
                )
              })}
            </S.Select>
          </S.Label>
          <S.Label>
            Descrição:
            <S.TextArea
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </S.Label>
          <S.Label>
            Oferta (%):
            <S.Input
              type="number"
              value={offer}
              max="100"
              onChange={e => setOffer(e.target.value)}
            />
          </S.Label>

          {offer > 0 && (
            <S.Label>Preço final: R$ {Number(finalPrice).toFixed(2)}</S.Label>
          )}

          <S.Button onClick={handleSubmit}>Salvar</S.Button>
          <S.ButtonCancel onClick={onClose}>Cancelar</S.ButtonCancel>
        </S.Form>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}

export default EditProductModal
