import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/GlobalStyles'
import LoginComponent from './components/LoginComponent'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <LoginComponent />
    <GlobalStyles />
  </>
)
