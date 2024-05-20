import React from 'react'
import { CartProvider } from './Cart'
import { UserProvider } from './User'

export const GlobalProvider = ({ children }) => (
    <UserProvider>
        <CartProvider>
            {children}
        </CartProvider>
    </UserProvider>
)