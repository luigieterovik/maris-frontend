import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../Containers/Home'
import Catalog from '../Containers/Catalog'
import Login from '../components/Login'
import { SearchSelector } from '../Containers/Search'
import Product from '../Containers/Product'
import { Cart } from '../Containers/Cart'
import Checkout from '../Containers/Checkout'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/*" element={<Catalog />} />
      <Route path="/products/id/:id" element={<Product />} />
      <Route path="/search/*" element={<SearchSelector />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="/account/login/*"
        element={<Login accountComponent={'login'} />}
      />
      <Route
        path="/account/register"
        element={<Login accountComponent={'register'} />}
      />
      <Route
        path="/account/recover"
        element={<Login accountComponent={'recover'} />}
      />

      <Route
        path="/account/reset/:token"
        element={<Login accountComponent={'reset'} />}
      />
    </Routes>
  )
}
