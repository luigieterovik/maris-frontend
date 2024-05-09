import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const addProductToCart = product => {
    setCartProducts(prevProducts => [product, ...prevProducts])
  }

  const removeProductToCart = idProduct => {
    setCartProducts(prevProducts =>
      prevProducts.filter(product => product.id !== idProduct)
    )
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

  const decrementQuantity = idProduct => {
    const foundProduct = cartProducts.find(product => product.id === idProduct)

    if (foundProduct.quantity === 1) {
      return
    }
    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === idProduct
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductToCart,
        incrementQuantity,
        decrementQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
