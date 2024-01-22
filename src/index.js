import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './Containers/Home/index'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Home />
    <GlobalStyles />
  </>
)
