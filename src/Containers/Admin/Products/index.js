import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../services/api.js'
import EditProductModal from './modals/editProductModal.js'
import DeleteConfirmationModal from './modals/deleteConfirmationModal.js'
import { validateToken } from '../../../utils/functions/index.js'
import AddProductModal from './modals/addProductModal.js'
import { productsState, categoriesState } from '../../../utils/states/index.js'
import * as S from './styles.js'

const i = name => {
  return require('../../../assets/' + name)
}

const formatDate = dateString => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
  return new Date(dateString).toLocaleDateString('pt-BR', options)
}

const formatPrice = price => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const formatOffer = offer => {
  return `${offer ? offer : 0}%`
}

const AdminProducts = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('marisboutiks:userData'))
    const token = userData?.token

    if (!token) navigate('/account/login/continue')
    else {
      validateToken(token)
    }

    console.log(token)
  }, [])

  const { products, setProducts } = productsState()
  const { categories, setCategories } = categoriesState()

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const [productToEdit, setProductToEdit] = useState(null)
  const [productToDelete, setProductToDelete] = useState(null)

  const handleEdit = product => {
    setProductToEdit(product)
    setIsEditModalOpen(true)
  }

  const handleDelete = productId => {
    const product = products.find(p => p.id === productId)
    setProductToDelete(product)
    setIsDeleteModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsAddModalOpen(false)
    setIsEditModalOpen(false)
    setIsDeleteModalOpen(false)
  }

  const handleSubmitEditModal = async updatedProduct => {
    try {
      const userData = JSON.parse(localStorage.getItem('marisboutiks:userData'))
      const token = userData?.token

      if (!token) {
        console.error('Token não encontrado!')
        return
      }

      const formData = new FormData()
      formData.append('name', updatedProduct.name)
      formData.append('description', updatedProduct.description)
      formData.append('price', updatedProduct.price)
      formData.append('categoryId', updatedProduct.categoryId)
      formData.append('offerPercentage', updatedProduct.offerPercentage)
      formData.append('file', updatedProduct.image)

      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1])
      }

      const response = await api.put(
        `/catalog/${updatedProduct.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      console.log(response)
    } catch (error) {
      console.error('Erro ao enviar produto:', error)
    }
  }

  const confirmDelete = async product => {
    try {
      const userData = JSON.parse(localStorage.getItem('marisboutiks:userData'))
      const token = userData?.token

      if (!token) {
        console.error('Token não encontrado!')
        return
      }

      const response = await api.delete(`/catalog/${product.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      console.log(response)
    } catch (error) {
      console.error('Erro ao enviar produto:', error)
    }

    setIsDeleteModalOpen(false)
    setProductToDelete(null)
  }

  const handleSubmitAddModal = async newProduct => {
    try {
      const userData = JSON.parse(localStorage.getItem('marisboutiks:userData'))
      const token = userData?.token

      if (!token) {
        console.error('Token não encontrado!')
        return
      }

      const formData = new FormData()
      formData.append('name', newProduct.name)
      formData.append('description', newProduct.description)
      formData.append('price', newProduct.price)
      formData.append('categoryId', newProduct.categorySelected)
      formData.append('offerPercentage', newProduct.offerPercentage)

      if (newProduct.image) {
        formData.append('file', newProduct.image)
      } else {
        console.warn('Nenhuma imagem anexada!')
      }

      // Debug: Verificando o conteúdo do FormData
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1])
      }

      const response = await api.post('/catalog', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(response)
    } catch (error) {
      console.error('Erro ao enviar produto:', error)
    }
  }

  return (
    <S.Container>
      <h1>Lista de Produtos</h1>
      <S.ButtonAdd onClick={() => setIsAddModalOpen(true)}>
        Adicionar Produto
      </S.ButtonAdd>
      <S.Table>
        <S.TableHeader>
          <S.TableRow>
            <S.TableHeaderColumn>Produto</S.TableHeaderColumn>
            <S.TableHeaderColumn>Preço</S.TableHeaderColumn>
            <S.TableHeaderColumn>Categoria</S.TableHeaderColumn>
            <S.TableHeaderColumn>Oferta</S.TableHeaderColumn>
            <S.TableHeaderColumn>Criado Em</S.TableHeaderColumn>
            <S.TableHeaderColumn>Ações</S.TableHeaderColumn>
          </S.TableRow>
        </S.TableHeader>
        <S.TableBody>
          {products.map(product => (
            <S.TableRow key={product.id} className="productRow">
              <S.TableColumn>
                <S.ProductColumn>
                  <S.ProductImage src={product.path} alt={product.name} />
                  <S.ProductName>{product.name}</S.ProductName>
                </S.ProductColumn>
              </S.TableColumn>
              <S.TableColumn>{formatPrice(product.price)}</S.TableColumn>
              <S.TableColumn>{product.category.name}</S.TableColumn>
              <S.TableColumn>
                {product.offerPercentage &&
                  formatOffer(product.offerPercentage)}
              </S.TableColumn>
              <S.TableColumn>{formatDate(product.createdAt)}</S.TableColumn>
              <S.TableColumn>
                <S.ButtonEdit onClick={() => handleEdit(product)}>
                  <img src={i('edit.png')} />
                </S.ButtonEdit>
                <S.ButtonDelete onClick={() => handleDelete(product.id)}>
                  <img src={i('trash.png')} />
                </S.ButtonDelete>
              </S.TableColumn>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitAddModal}
        categories={categories}
      />
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={handleCloseModal}
        product={productToEdit}
        onSubmit={handleSubmitEditModal}
        categories={categories}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseModal}
        onConfirm={product => confirmDelete(product)}
        product={productToDelete}
      />
    </S.Container>
  )
}

export default AdminProducts
