import React, { useState } from 'react'
import * as S from '../styles.js'

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('1')
  const [offer, setOffer] = useState(false)
  const [offerPercentage, setOfferPercentage] = useState('')

  const handleImageChange = e => {
    setImage(e.target.files[0])
  }

  const handleSubmit = () => {
    const newProduct = {
      name,
      description,
      price,
      category,
      offer,
      offerPercentage: offer ? offerPercentage : null,
      image
    }
    onSubmit(newProduct)
    onClose()
  }

  if (!isOpen) {
    return null
  }

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Faixa>
          <h2>Adicionar Produto</h2>
        </S.Faixa>
        <S.Form>
          <S.Label>
            Imagem:
            <S.Input type="file" onChange={handleImageChange} />
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
            Descrição:
            <S.TextArea
              value={description}
              onChange={e => setDescription(e.target.value)}
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
              <option value="masculino">1</option>
              <option value="feminino">2</option>
              <option value="ambiente">3</option>
            </S.Select>
          </S.Label>
          <S.Label>
            Oferta:
            <S.Select
              value={offer}
              onChange={e => setOffer(e.target.value === 'true')}
            >
              <option value="false">Não</option>
              <option value="true">Sim</option>
            </S.Select>
          </S.Label>
          {offer && (
            <S.Label>
              Porcentagem de Oferta:
              <S.Input
                type="number"
                value={offerPercentage}
                onChange={e => setOfferPercentage(e.target.value)}
              />
            </S.Label>
          )}
          <S.Button onClick={handleSubmit}>Adicionar</S.Button>
          <S.ButtonCancel onClick={onClose}>Cancelar</S.ButtonCancel>
        </S.Form>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}

export default Modal
