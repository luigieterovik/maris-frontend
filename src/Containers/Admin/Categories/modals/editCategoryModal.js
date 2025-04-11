import React, { useState, useEffect } from 'react'
import * as S from '../styles.js'

const EditCategoryModal = ({ isOpen, onClose, onSubmit, category }) => {
  const [id, setId] = useState()
  const [name, setName] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    if (category) {
      setId(category.id)
      setName(category.name)
      setImage(category.image)
    }
  }, [category])

  const handleImageChange = e => {
    setImage(e.target.files[0])
  }

  const handleSubmit = () => {
    const updatedCategory = {
      id,
      name,
      image
    }

    console.log(id)

    onSubmit(updatedCategory)
    onClose()
  }

  if (!isOpen) {
    return null
  }

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Faixa>
          <h2>Editar Categoria</h2>
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
          <S.Button onClick={handleSubmit}>Salvar</S.Button>
          <S.ButtonCancel onClick={onClose}>Cancelar</S.ButtonCancel>
        </S.Form>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}

export default EditCategoryModal
