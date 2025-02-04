import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './modals/addProductModal.js'
import api from '../../services/api.js'
import EditProductModal from './modals/editProductModal.js'
import DeleteConfirmationModal from './modals/deleteConfirmationModal.js'
import * as S from './styles.js'
import { productsState } from '../../utils/states/index.js'

const i = name => {
  return require('../../assets/' + name)
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

const ProductList = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('marisboutiks:userData'))
    const token = userData?.token

    console.log(userData)
    console.log(token)

    if (!token) navigate('/account/login/continue')
    else {
      const validateToken = async token => {
        const userData = localStorage.getItem('marisboutiks:userData')

        if (!userData) return false

        const storedUserToken = JSON.parse(userData)?.token

        console.log('Token armazenado:', storedUserToken)
        console.log('Token recebido:', token)

        if (!storedUserToken || token !== storedUserToken) return false

        try {
          const response = await api.post('/validate-token', { token })

          console.log('TOKEN VALIDO????' + response.data.valid)

          if (response.data.valid === false) {
            console.log('ENTROU NO ERRO AQUIIII')
            localStorage.removeItem('marisboutiks:userData')
            return false
          }

          return true
        } catch (error) {
          console.error('Erro ao validar token:', error)
          return false
        }
      }

      validateToken(token)
    }

    console.log(token)
  }, [])

  const { products, setProducts } = productsState()
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false) // Estado para o modal de deletar
  const [productToEdit, setProductToEdit] = useState(null)
  const [productToDelete, setProductToDelete] = useState(null) // Produto a ser deletado

  const handleEdit = product => {
    setProductToEdit(product)
    setIsEditModalOpen(true)
  }

  const handleDelete = productId => {
    const product = products.find(p => p.id === productId)
    setProductToDelete(product)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    setProducts(products.filter(product => product.id !== productToDelete.id))
    setIsDeleteModalOpen(false)
    setProductToDelete(null)
  }

  const handleCloseModal = () => {
    setIsAddModalOpen(false)
    setIsEditModalOpen(false)
    setIsDeleteModalOpen(false)
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
      formData.append('categoryId', newProduct.category)
      formData.append('offer', newProduct.offer ? 'true' : 'false')

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

  const handleSubmitEditModal = updatedProduct => {
    setProducts(
      products.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    )
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
                  <S.ProductImage src={i(product.image)} alt={product.name} />
                  <S.ProductName>{product.name}</S.ProductName>
                </S.ProductColumn>
              </S.TableColumn>
              <S.TableColumn>{formatPrice(product.price)}</S.TableColumn>
              <S.TableColumn>{product.category}</S.TableColumn>
              <S.TableColumn>
                {formatOffer(product.offerPercentage)}
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

      <Modal
        isOpen={isAddModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitAddModal}
      />
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={handleCloseModal}
        product={productToEdit}
        onSubmit={handleSubmitEditModal}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseModal}
        onConfirm={confirmDelete}
        product={productToDelete}
      />
    </S.Container>
  )
}

export default ProductList
