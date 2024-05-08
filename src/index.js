import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'

import RouteTemplate from './components/RouteTemplate'

import AllRoutes from './routes/routes'

import { CartProvider } from './contexts/Cart'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <CartProvider>
      <RouteTemplate>
        <AllRoutes />
      </RouteTemplate>
    </CartProvider>
    <GlobalStyles />
  </BrowserRouter>
)
