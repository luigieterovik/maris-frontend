import React from 'react'
import ReactDOM from 'react-dom'

import GlobalStyles from './styles/GlobalStyles'
import RouteTemplate from './components/RouteTemplate'

import Routes from './routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <RouteTemplate>
      <Routes />
    </RouteTemplate>

    <GlobalStyles />
  </>
)
