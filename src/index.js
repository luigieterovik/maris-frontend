import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'

import RouteTemplate from './components/RouteTemplate'

import AllRoutes from './routes/routes'

import { GlobalProvider } from './contexts/GlobalProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <GlobalProvider>
      <RouteTemplate>
        <AllRoutes />
      </RouteTemplate>
    </GlobalProvider>
    <GlobalStyles />
  </BrowserRouter>
)
