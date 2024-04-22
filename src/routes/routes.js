import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../Containers/Home'
import Catalog from '../Containers/Catalog'
import Login from '../components/Login'
import FilteredProducts from '../Containers/FilteredProducts'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/*" element={<Catalog />} />
      <Route path="/account/login" element={<Login login />} />
      <Route path="/account/register" element={<Login register />} />
      <Route path="/account/recover" element={<Login recover />} />
      <Route path="/search/*" element={<FilteredProducts />} />
    </Routes>
  )
}
