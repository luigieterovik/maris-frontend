import React, { useState, useEffect } from 'react'
import * as S from '../styles.js'

const EditCategoryModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('') // Estado para descrição
  const [offer, setOffer] = useState('') // Estado para oferta
  const [image, setImage] = useState(null) // Armazena o arquivo de imagem
  const [finalPrice, setFinalPrice] = useState('') // Estado para o preço final com desconto

  useEffect(() => {
    if (product) {
      setName(product.name)
      setPrice(product.price)
      setCategory(product.category)
      setDescription(product.description) // Pega a descrição existente
      setOffer(product.offerPercentage ?? 0) // Garante que o valor de oferta seja tratado, caso seja null
      setImage(product.image) // Pode manter o caminho da imagem ou null
    }
  }, [product])

  useEffect(() => {
    // Calcula o preço final quando a oferta ou o preço mudam
    if (offer > 0 && price > 0) {
      const discount = (price * offer) / 100
      setFinalPrice(price - discount)
    } else {
      setFinalPrice(price)
    }
  }, [offer, price])

  const handleImageChange = e => {
    setImage(e.target.files[0]) // Obtém o arquivo selecionado
  }

  const handleSubmit = () => {
    const updatedProduct = {
      ...product,
      name,
      price: parseFloat(price),
      category,
      description,
      offer: parseFloat(offer) || 0, // Converte oferta em número ou define como 0 se estiver vazio
      image // Aqui você pode tratar o upload do arquivo no backend
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
              onChange={handleImageChange} // Manipula a seleção de imagem
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
            <S.Input
              type="text"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
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
              max="100" // Define o valor máximo como 100
              onChange={e => setOffer(e.target.value)}
            />
          </S.Label>

          {/* Exibe o preço final se houver oferta */}
          {offer > 0 && (
            <S.Label>Preço final: R$ {finalPrice.toFixed(2)}</S.Label>
          )}

          <S.Button onClick={handleSubmit}>Salvar</S.Button>
          <S.ButtonCancel onClick={onClose}>Cancelar</S.ButtonCancel>
        </S.Form>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}

export default EditCategoryModal
