import React from 'react'
import * as S from '../styles.js'

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, product }) => {
  if (!isOpen) return null

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Faixa>
          <h2>Tem certeza?</h2>
        </S.Faixa>
        <S.Form>
          <p style={{ fontSize: '14px' }}>
            Você deseja deletar o produto <b>{product?.name}</b>? Essa ação{' '}
            <b>não poderá ser revertida</b>.
          </p>
        </S.Form>
        <S.DeleteDiv>
          <S.Button onClick={() => onConfirm(product)}>Sim, deletar</S.Button>
          <S.ButtonCancel onClick={onClose}>Cancelar</S.ButtonCancel>
        </S.DeleteDiv>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}

export default DeleteConfirmationModal
