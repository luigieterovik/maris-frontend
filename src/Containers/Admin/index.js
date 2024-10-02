import React, { useState, useEffect } from 'react'
import Modal from './modals/addProductModal.js'
import * as S from './styles.js'

const mockProducts = [
  {
    id: 1,
    name: 'Produto A',
    imageUrl: 'https://via.placeholder.com/50',
    price: 50.0
  },
  {
    id: 2,
    name: 'Produto B',
    imageUrl: 'https://via.placeholder.com/50',
    price: 30.0
  },
  {
    id: 3,
    name: 'Produto C',
    imageUrl: 'https://via.placeholder.com/50',
    price: 40.0
  }
]

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setProducts(mockProducts)
  }, [])

  const handleEdit = productId => {
    console.log(`Editando produto com ID: ${productId}`)
  }

  const handleDelete = productId => {
    console.log(`Deletando produto com ID: ${productId}`)
  }

  const handleAddProduct = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmitModal = newProduct => {
    console.log('Novo produto adicionado:', newProduct)
    setProducts([...products, { id: products.length + 1, ...newProduct }])
  }

  return (
    <S.Container>
      <h1>Lista de Produtos</h1>
      <S.ButtonAdd onClick={handleAddProduct}>Adicionar Produto</S.ButtonAdd>
      <S.Table>
        <S.TableHeader>
          <S.TableRow>
            <S.TableHeaderColumn>Produto</S.TableHeaderColumn>
            <S.TableHeaderColumn>Preço</S.TableHeaderColumn>
            <S.TableHeaderColumn>Ações</S.TableHeaderColumn>
          </S.TableRow>
        </S.TableHeader>
        <S.TableBody>
          {products.map(product => (
            <S.TableRow key={product.id} className="productRow">
              <S.TableColumn>
                <S.ProductColumn>
                  <S.ProductImage src={product.imageUrl} alt={product.name} />
                  <S.ProductName>{product.name}</S.ProductName>
                </S.ProductColumn>
              </S.TableColumn>
              <S.TableColumn>R${product.price.toFixed(2)}</S.TableColumn>
              <S.TableColumn>
                <S.ButtonEdit onClick={() => handleEdit(product.id)}>
                  Editar
                </S.ButtonEdit>
                <S.ButtonDelete onClick={() => handleDelete(product.id)}>
                  Deletar
                </S.ButtonDelete>
              </S.TableColumn>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
      />
    </S.Container>
  )
}

export default ProductList
