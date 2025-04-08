import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../services/api.js'
import EditCategoryModal from './modals/editCategoryModal.js'
import DeleteConfirmationModal from './modals/deleteConfirmationModal.js'
import AddCategoryModal from './modals/addProductModal.js'
import { validateToken } from '../../../utils/functions/index.js'
import { categoriesState } from '../../../utils/states/index.js'
import * as S from './styles.js'

const i = name => require('../../../assets/' + name)

const AdminCategories = () => {
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('marisboutiks:userData'))
    const token = userData?.token
    if (!token) navigate('/account/login/continue')
    else validateToken(token)
  }, [])

  const { categories, setCategories } = categoriesState()
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [categoryToEdit, setCategoryToEdit] = useState(null)
  const [categoryToDelete, setCategoryToDelete] = useState(null)

  const navigate = useNavigate()

  const handleEdit = category => {
    setCategoryToEdit(category)
    setIsEditModalOpen(true)
  }

  const handleDelete = categoryId => {
    const category = categories.find(c => c.id === categoryId)
    setCategoryToDelete(category)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = async category => {
    try {
      const userData = JSON.parse(localStorage.getItem('marisboutiks:userData'))
      const token = userData?.token

      if (!token) {
        console.error('Token não encontrado!')
        return
      }

      const response = await api.delete(`/categories/${category.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      console.log(response)
    } catch (error) {
      console.error('Erro ao enviar categoria:', error)
    }

    setIsDeleteModalOpen(false)
    setCategoryToDelete(null)
  }

  const handleCloseModal = () => {
    setIsAddModalOpen(false)
    setIsEditModalOpen(false)
    setIsDeleteModalOpen(false)
  }

  const handleSubmitAddModal = async newCategory => {
    try {
      const userData = JSON.parse(localStorage.getItem('marisboutiks:userData'))
      const token = userData?.token

      if (!token) {
        console.error('Token não encontrado!')
        return
      }

      const formData = new FormData()
      formData.append('name', newCategory.name)

      if (newCategory.image) {
        formData.append('file', newCategory.image)
      } else {
        console.warn('Nenhuma imagem anexada!')
      }

      // Debug: Verificando o conteúdo do FormData
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1])
      }

      const response = await api.post('/categories', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(response)
    } catch (error) {
      console.error('Erro ao enviar categoria:', error)
    }
  }

  return (
    <S.Container>
      <h1>Gerenciamento de Categorias</h1>
      <S.ButtonAdd onClick={() => setIsAddModalOpen(true)}>
        Adicionar Categoria
      </S.ButtonAdd>
      <S.CardsContainer>
        {categories.map(category => (
          <S.CategoryCard key={category.id}>
            <S.CategoryImage src={category.path} alt={category.name} />
            <S.CategoryName>{category.name}</S.CategoryName>
            <S.Actions>
              <S.ButtonEdit onClick={() => handleEdit(category)}>
                <img src={i('edit.png')} alt="Editar" />
              </S.ButtonEdit>
              <S.ButtonDelete onClick={() => handleDelete(category.id)}>
                <img src={i('trash.png')} alt="Deletar" />
              </S.ButtonDelete>
            </S.Actions>
          </S.CategoryCard>
        ))}
      </S.CardsContainer>

      <AddCategoryModal
        isOpen={isAddModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitAddModal}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseModal}
        onConfirm={category => confirmDelete(category)}
        category={categoryToDelete}
      />
    </S.Container>
  )
}

export default AdminCategories
