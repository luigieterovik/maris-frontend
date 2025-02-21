import React, { useState } from 'react'
import * as S from '../styles.js'

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')

  const handleImageChange = e => {
    setImage(e.target.files[0])
  }

  const handleSubmit = () => {
    const newProduct = {
      name,
      image
    }
    onSubmit(newProduct)
    onClose()
  }

  if (!isOpen) return null

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Faixa>
          <h2>Adicionar Categoria</h2>
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

          <S.Button onClick={handleSubmit}>Adicionar</S.Button>
          <S.ButtonCancel onClick={onClose}>Cancelar</S.ButtonCancel>
        </S.Form>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}

export default Modal
