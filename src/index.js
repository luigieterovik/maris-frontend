import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/GlobalStyles'
import RouteTemplate from './components/RouteTemplate'

import Home from './Containers/Home'
import Login from './components/Login'
import Catalog from './Containers/Catalog'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <RouteTemplate>
      <Catalog />
    </RouteTemplate>

    <GlobalStyles />
  </>
)
