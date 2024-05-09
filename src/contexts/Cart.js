import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const addProductToCart = product => {
    setCartProducts(prevProducts => [product, ...prevProducts])
  }

  const incrementQuantity = (idProduct, quantity) => {
    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === idProduct
          ? { ...product, quantity: product.quantity + quantity }
          : product
      )
    )
  }

  const removeQuantity = (idProduct, quantity) => {
    const updatedProducts = cartProducts.map(product =>
      product.id === idProduct
        ? { ...product, quantity: product.quantity - quantity }
        : product
    )

    if (cartProducts.length === 0) setCartProducts(updatedProducts)
    else {
      const allOtherProducts = cartProducts.filter(
        product => product.id !== idProduct
      )
      setCartProducts(...allOtherProducts, updatedProducts)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        incrementQuantity,
        removeQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
