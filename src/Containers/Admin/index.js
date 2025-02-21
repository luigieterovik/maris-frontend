import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateToken } from '../../utils/functions/index.js'
import api from '../../services/api.js'
import * as S from './styles.js'
const ProductList = () => {
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

  return (
    <S.Container>
      <h1>Área de administração</h1>
      <S.MenuContainer>
        <S.TableHeader>
          <p>Opções de gerenciamento</p>
        </S.TableHeader>

        <S.Option onClick={() => navigate('/admin/categories')}>
          Categorias
        </S.Option>

        <S.Option onClick={() => navigate('/admin/products')}>
          Produtos
        </S.Option>

        <S.Option onClick={() => navigate('/admin/orders')}>Pedidos</S.Option>
      </S.MenuContainer>
    </S.Container>
  )
}

export default ProductList
