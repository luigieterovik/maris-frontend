import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './Containers/Home'
import Login from './components/Login'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Login isLogin />
    <GlobalStyles />
  </>
)
