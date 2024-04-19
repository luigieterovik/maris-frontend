import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import RouteTemplate from './components/RouteTemplate'

import AllRoutes from './routes/routes'
import FilteredProducts from './Containers/FilteredProducts'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <RouteTemplate>
      <FilteredProducts /> {/* Return AllRoutes after develop FilteredProducts */}
    </RouteTemplate>
    <GlobalStyles />
  </BrowserRouter>
)
