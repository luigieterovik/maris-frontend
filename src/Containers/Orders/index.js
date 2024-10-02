import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { ordersState } from '../../utils/states'
import { priceToCurrency } from '../../utils/functions/index'

const i = name => {
  return require('../../assets/' + name)
}

const Orders = () => {
  const { orders } = ordersState()

  const navigate = useNavigate()

  return (
    <S.Container>
      <h2>Meus pedidos</h2>
      <S.Table>
        <S.TableHeader>
          <S.TableRow>
            <S.TableColumn>Produto</S.TableColumn>
            <S.TableColumn>Quantidade</S.TableColumn>
            <S.TableColumn>Data</S.TableColumn>
            <S.TableColumn>Total</S.TableColumn>
          </S.TableRow>
        </S.TableHeader>
        <S.TableBody>
          {orders.map((order, index) => (
            <S.TableRow
              key={index}
              className="productRow"
              onClick={() => navigate(`/products/id/${order.productId}`)}
            >
              <S.TableColumn>
                <S.ProductColumn>
                  <S.ProductImage src={i(order.image)} alt={order.name} />
                  <S.ProductName>{order.name}</S.ProductName>
                </S.ProductColumn>
              </S.TableColumn>
              <S.TableColumn>{order.quantity}</S.TableColumn>
              <S.TableColumn>
                {new Date(order.createdAt).toLocaleDateString()}
              </S.TableColumn>
              <S.TableColumn>{priceToCurrency(order.total)}</S.TableColumn>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.Container>
  )
}

export default Orders
