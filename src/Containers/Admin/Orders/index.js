import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../services/api.js'
import { validateToken } from '../../../utils/functions/index.js'
import { productsState } from '../../../utils/states/index.js'
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

const AdminOrders = () => {
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('marisboutiks:userData'))
    const token = userData?.token

    if (!token) navigate('/account/login/continue')
    else {
      validateToken(token)
    }

    console.log(token)
  }, [])

  const { orders, setOrders } = productsState()

  const navigate = useNavigate()

  return (
    <S.Container>
      <h1>Lista de Pedidos</h1>
      <S.Table>
        <S.TableHeader>
          <S.TableRow>
            <S.TableHeaderColumn>Usuário</S.TableHeaderColumn>
            <S.TableHeaderColumn>Produto</S.TableHeaderColumn>
            <S.TableHeaderColumn>Status</S.TableHeaderColumn>
            <S.TableHeaderColumn>Total</S.TableHeaderColumn>
            <S.TableHeaderColumn>Endereço</S.TableHeaderColumn>
            <S.TableHeaderColumn>Data</S.TableHeaderColumn>
            <S.TableHeaderColumn>Atualização</S.TableHeaderColumn>
          </S.TableRow>
        </S.TableHeader>
        <S.TableBody>
          {/* {orders.map(product => (
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
          ))} */}
        </S.TableBody>
      </S.Table>
    </S.Container>
  )
}

export default AdminOrders
