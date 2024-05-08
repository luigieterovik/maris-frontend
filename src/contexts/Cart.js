import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const addProductToCart = product => {
    setCartProducts([...cartProducts, product])
  }

  return (
    <CartContext.Provider value={{ cartProducts, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}
